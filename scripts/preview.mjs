import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright-chromium'

await import('./build-static.mjs')
const root = path.resolve(import.meta.dirname, '..')
const cache = path.join(os.homedir(), '.cache', 'ms-playwright')
const candidates = []
if (fs.existsSync(cache)) {
  for (const dir of fs.readdirSync(cache).filter(x => x.startsWith('chromium-')).sort().reverse()) {
    candidates.push(path.join(cache, dir, 'chrome-linux64/chrome'), path.join(cache, dir, 'chrome-linux/chrome'))
  }
}
candidates.push('/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome')
const executablePath = candidates.find(fs.existsSync)
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) })
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 })
  await page.goto(pathToFileURL(path.join(root, 'docs/index.html')).href, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  const overflow = await page.evaluate(() => {
    const body = document.querySelector('.slide-body').getBoundingClientRect()
    return [...document.querySelectorAll('.slide-body *')].filter(el => {
      const r = el.getBoundingClientRect()
      return r.width && r.height && (r.bottom > body.bottom + 1 || r.right > body.right + 1 || r.left < body.left - 1)
    }).map(el => el.className || el.tagName)
  })
  if (overflow.length) throw new Error('Slide content overflows: ' + overflow.join(', '))
  fs.mkdirSync(path.join(root, 'release'), { recursive: true })
  await page.screenshot({ path: path.join(root, 'release/overview.png') })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.setViewportSize({ width: 800, height: 600 })
  await page.reload()
  if (errors.length) throw new Error(errors.join('\n'))
  console.log('HTML preview verified at 1280×720, 1920×1080 and 800×600; no content overflow or browser errors.')
} finally {
  await browser.close()
}
