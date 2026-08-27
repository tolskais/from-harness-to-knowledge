import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const source = fs.readFileSync(path.join(root, 'slides.md'), 'utf8')
const css = fs.readFileSync(path.join(root, 'styles/index.css'), 'utf8')

function parseBlock(block) {
  const match = block.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error('Each slide must begin with frontmatter')
  const meta = Object.fromEntries(match[1].split('\n').map(line => {
    const i = line.indexOf(':')
    if (i < 0) return null
    return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '')]
  }).filter(Boolean))
  return { meta, body: match[2].trim() }
}

const blocks = source.split(/\n(?=---\nlayout: deck\n)/)
const slides = blocks.map(parseBlock)
const esc = value => String(value || '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')

const rendered = slides.map(({ meta, body }, i) => `
<section class="slide${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${esc(meta.page)}">
  <div class="slide-shell">
    <main class="slide-body">${body}</main>
    <footer><span>${esc(meta.appendix === 'true' ? 'Q&A Appendix' : meta.section || 'Opening')}</span><span>${esc(meta.page)}</span></footer>
  </div>
</section>`).join('\n')

const html = `<!doctype html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><title>From Harness to Knowledge</title>
<style>${css}
html,body{overflow:hidden;background:#111}.deck{position:fixed;inset:0;display:grid;place-items:center}.stage{position:relative;width:1280px;height:720px;transform-origin:center;background:var(--paper);overflow:hidden}.slide{display:none;position:absolute;inset:0;width:1280px;height:720px;background:var(--paper)}.slide.active{display:block}.controls{position:fixed;right:14px;bottom:12px;display:flex;gap:7px;opacity:.25;transition:opacity .2s}.controls:hover,.controls:focus-within{opacity:1}.controls button{border:0;border-radius:50%;width:34px;height:34px;color:white;background:#17212b;font:18px Arial;cursor:pointer}@media print{html,body{overflow:visible;background:white}.deck{position:static;display:block}.stage{transform:none!important;width:auto;height:auto;overflow:visible}.slide{display:block!important;position:relative;page-break-after:always;width:1280px;height:720px}.controls{display:none}@page{size:13.333333in 7.5in;margin:0}}
</style></head><body><div class="deck"><div class="stage" id="stage">${rendered}</div></div>
<nav class="controls" aria-label="Slide controls"><button id="prev" aria-label="Previous slide">‹</button><button id="next" aria-label="Next slide">›</button></nav>
<script src="./assets/app.js"></script></body></html>`

const js = `(() => {
  const slides=[...document.querySelectorAll('.slide')], stage=document.getElementById('stage'); let current=0;
  function resize(){const s=Math.min(innerWidth/1280,innerHeight/720);stage.style.transform='scale('+s+')'}
  function show(n,write=true){current=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>s.classList.toggle('active',i===current));if(write)history.replaceState(null,'','#'+(current+1));document.title=(current+1)+'/'+slides.length+' · From Harness to Knowledge'}
  function fromHash(){const n=Number(location.hash.slice(1));show(Number.isFinite(n)&&n>0?n-1:0,false)}
  addEventListener('resize',resize);addEventListener('hashchange',fromHash);addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1)}if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1)});
  document.getElementById('prev').onclick=()=>show(current-1);document.getElementById('next').onclick=()=>show(current+1);
  let x=null;addEventListener('touchstart',e=>x=e.touches[0].clientX,{passive:true});addEventListener('touchend',e=>{if(x===null)return;const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>50)show(current+(d<0?1:-1));x=null},{passive:true});
  resize();fromHash();
})();`

const out = path.join(root, 'docs')
fs.mkdirSync(path.join(out, 'assets'), { recursive: true })
fs.writeFileSync(path.join(out, 'index.html'), html)
fs.writeFileSync(path.join(out, 'assets/app.js'), js)
fs.writeFileSync(path.join(out, '.nojekyll'), '')
console.log(`Built ${slides.length} slides in docs/`)
