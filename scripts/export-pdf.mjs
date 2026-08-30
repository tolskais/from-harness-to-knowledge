import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
if (!fs.existsSync(path.join(root, 'docs/index.html'))) await import('./build-static.mjs')
let chromium
try { ({ chromium } = await import('playwright-chromium')) }
catch { console.error('PDF export needs playwright-chromium. Run npm install, then npm run export.'); process.exit(1) }
function findInstalledChromium() {
  const base = path.join(os.homedir(), '.cache', 'ms-playwright')
  if (fs.existsSync(base)) {
    for (const dir of fs.readdirSync(base).filter(x => x.startsWith('chromium-')).sort().reverse()) {
      const candidates = [
        path.join(base, dir, 'chrome-linux', 'chrome'),
        path.join(base, dir, 'chrome-linux64', 'chrome'),
      ]
      const found = candidates.find(fs.existsSync)
      if (found) return found
    }
  }
  return ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].find(fs.existsSync)
}
const executablePath = findInstalledChromium()
fs.mkdirSync(path.join(root, 'release'), { recursive: true })
const output = path.join(root, 'release/presentation.pdf')

async function browserExport() {
  const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) })
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  await page.goto(pathToFileURL(path.join(root, 'docs/index.html')).href, { waitUntil: 'load' })
  await page.emulateMedia({ media: 'print' })
  await page.pdf({ path: output, width: '13.333333in', height: '7.5in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } })
  await browser.close()
}

async function portableExport() {
  const { PDFDocument, rgb } = await import('pdf-lib')
  const fontkit = (await import('@pdf-lib/fontkit')).default
  const pdf = await PDFDocument.create(); pdf.registerFontkit(fontkit)
  const regular = await pdf.embedFont(fs.readFileSync('/usr/share/fonts/nanum/NanumGothic.ttf'), { subset: true })
  const bold = await pdf.embedFont(fs.readFileSync('/usr/share/fonts/nanum/NanumGothicBold.ttf'), { subset: true })
  const source = fs.readFileSync(path.join(root, 'slides.md'), 'utf8')
  const blocks = source.split(/\n(?=---\nlayout: deck\n)/)
  const decode = s => s.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&rarr;|→/g, '→').replace(/\s+/g, ' ').trim()
  const value = (head, key) => (head.match(new RegExp(`^${key}:\\s*['\"]?([^'\"\\n]+)`, 'm')) || [,''])[1].trim()
  for (const block of blocks) {
    const parts = block.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/); if (!parts) continue
    const [, head, body] = parts; const pageLabel = value(head, 'page'); const chapter = value(head, 'chapter'); const section = value(head, 'section')
    const page = pdf.addPage([960, 540]); const { width, height } = page.getSize()
    page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(.984,.988,.992) })
    const chapters = [['01','Recent Signal'],['02','What We Already Did'],['03','What Knowledge Means'],['04','Future Agent']]
    chapters.forEach(([n,label],i) => { const x=44+i*218; page.drawText(`${n}  ${label}`, {x,y:502,size:9,font:bold,color:n===chapter?rgb(.09,.42,.53):rgb(.58,.63,.67)}); page.drawLine({start:{x,y:493},end:{x:x+190,y:493},thickness:n===chapter?2:1,color:n===chapter?rgb(.09,.42,.53):rgb(.85,.88,.90)}) })
    const chunks = [...body.matchAll(/<(?:h1|h2|h3|p|strong)[^>]*>([\s\S]*?)<\/(?:h1|h2|h3|p|strong)>/gi)].map(m=>decode(m[1])).filter(Boolean)
    let y=447
    for (let ci=0;ci<chunks.length && y>55;ci++) {
      const text=chunks[ci], isTitle=ci===0, size=isTitle?28:(text.length<35?15:11), useFont=isTitle||text.length<35?bold:regular
      const maxChars=isTitle?36:68; const lines=[]; for(let pos=0;pos<text.length;pos+=maxChars) lines.push(text.slice(pos,pos+maxChars))
      for (const line of lines.slice(0,4)) { if(y<55)break; page.drawText(line,{x:52,y,size,font:useFont,color:isTitle?rgb(.09,.13,.17):rgb(.20,.26,.31),maxWidth:850}); y-=size*1.48 }
      y-=isTitle?16:7
    }
    page.drawText(section || 'Q&A Appendix',{x:44,y:24,size:8,font:regular,color:rgb(.40,.45,.50)})
    page.drawText(pageLabel,{x:860,y:24,size:8,font:bold,color:rgb(.40,.45,.50)})
  }
  fs.writeFileSync(output, await pdf.save())
}

try { await browserExport(); console.log('Exported browser-rendered release/presentation.pdf') }
catch (error) { console.warn(`Browser export unavailable (${error.message.split('\n')[0]}). Creating portable PDF fallback.`); await portableExport(); console.log('Exported portable release/presentation.pdf') }
