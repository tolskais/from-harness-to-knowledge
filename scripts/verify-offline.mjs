import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const files = []
function walk(dir) { for (const ent of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, ent.name); ent.isDirectory() ? walk(p) : files.push(p) } }
if (!fs.existsSync(path.join(docs, 'index.html'))) throw new Error('docs/index.html is missing; run npm run build')
walk(docs)
const failures = []
for (const file of files.filter(f => /\.(html|css|js)$/.test(f))) {
  const text = fs.readFileSync(file, 'utf8')
  const resourcePattern = /<(?:script|img|source|video|audio|iframe|link)\b[^>]*(?:src|href)\s*=\s*["'](?:https?:)?\/\//gi
  if (resourcePattern.test(text)) failures.push(`${path.relative(root,file)}: external resource URL`)
  for (const m of text.matchAll(/(?:src|href)\s*=\s*["']([^"'#]+)["']/gi)) {
    const ref = m[1]
    if (/^(?:https?:|mailto:|data:)/i.test(ref)) continue
    const target = path.resolve(path.dirname(file), ref.split('?')[0])
    if (!fs.existsSync(target)) failures.push(`${path.relative(root,file)}: missing ${ref}`)
  }
}
const html = fs.readFileSync(path.join(docs, 'index.html'), 'utf8')
const slides = (html.match(/<section class="slide/g) || []).length
const pages = [...html.matchAll(/<footer><span>[^<]*<\/span><span>([^<]+)<\/span>/g)].map(m=>m[1])
if (slides !== 19) failures.push(`expected 19 slides, found ${slides}`)
if (pages.slice(0,13).some((p,i) => p !== `${String(i+1).padStart(2,'0')} / 13`)) failures.push('main page numbering mismatch')
if (pages.slice(13).some((p,i) => p !== `A${String(i+1).padStart(2,'0')} / A06`)) failures.push('appendix page numbering mismatch')
if (failures.length) { console.error(failures.join('\n')); process.exit(1) }
console.log(`Offline verification passed: ${slides} slides, ${files.length} local files, no external resource requests.`)
