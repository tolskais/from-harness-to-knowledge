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
const release = path.join(root, 'release/presentation.html')
if (!fs.existsSync(release) || fs.readFileSync(release, 'utf8') !== html) failures.push('standalone HTML is missing or out of date')
const slides = (html.match(/<section class="slide/g) || []).length
if (slides !== 1) failures.push(`expected 1 slide, found ${slides}`)
if (failures.length) { console.error(failures.join('\n')); process.exit(1) }
console.log(`Offline verification passed: ${slides} slides, ${files.length} local files, no external resource requests.`)
