import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { access, stat } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const portRaw = process.env.PORT
const PORT =
  portRaw != null && portRaw !== '' && Number.isFinite(Number(portRaw))
    ? Number(portRaw)
    : 3000

/** Crawler files: never SPA-fallback; return raw bytes or 404. */
const FIXED_STATIC = {
  '/sitemap.xml': 'application/xml; charset=utf-8',
  '/robots.txt': 'text/plain; charset=utf-8',
}

const EXT_MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

function resolveDistPath(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const filePath = path.normalize(path.join(DIST, ...segments))
  if (filePath !== DIST && !filePath.startsWith(DIST + path.sep)) {
    return null
  }
  return filePath
}

async function isReadableFile(filePath) {
  try {
    await access(filePath, constants.R_OK)
    const info = await stat(filePath)
    return info.isFile()
  } catch {
    return false
  }
}

function respond(res, status, headers, stream = null) {
  res.writeHead(status, headers)
  if (stream) {
    stream.pipe(res)
    return
  }
  res.end()
}

async function buildFileHeaders(filePath, contentType) {
  const info = await stat(filePath)
  return {
    'Content-Type': contentType,
    'Content-Length': String(info.size),
    ETag: `"${info.size}-${Math.trunc(info.mtimeMs)}"`,
  }
}

async function serveFile(req, res, filePath, contentType, extraHeaders = {}) {
  const fileHeaders = await buildFileHeaders(filePath, contentType)
  const headers = { ...fileHeaders, ...extraHeaders }
  if (req.headers['if-none-match'] === headers.ETag) {
    respond(res, 304, headers)
    return
  }
  if (req.method === 'HEAD') {
    respond(res, 200, headers)
    return
  }
  respond(res, 200, headers, createReadStream(filePath))
}

/** Prevent MIME sniffing so XML is not parsed as HTML in the browser. */
const CRAWLER_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'no-cache, must-revalidate',
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    respond(res, 405, { Allow: 'GET, HEAD' })
    return
  }

  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`)
  const pathname = decodeURIComponent(url.pathname)

  if (pathname === '/health') {
    respond(res, 200, { 'Content-Type': 'text/plain; charset=utf-8' })
    return
  }

  const fixedType = FIXED_STATIC[pathname]
  if (fixedType) {
    const filePath = path.join(DIST, path.basename(pathname))
    if (!(await isReadableFile(filePath))) {
      respond(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' })
      return
    }
    await serveFile(req, res, filePath, fixedType, CRAWLER_HEADERS)
    return
  }

  const staticPath = resolveDistPath(pathname)
  if (staticPath && (await isReadableFile(staticPath))) {
    const contentType = EXT_MIME[path.extname(staticPath)] ?? 'application/octet-stream'
    await serveFile(req, res, staticPath, contentType)
    return
  }

  const indexPath = path.join(DIST, 'index.html')
  if (!(await isReadableFile(indexPath))) {
    respond(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' })
    return
  }
  await serveFile(req, res, indexPath, 'text/html; charset=utf-8')
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving ${DIST} at http://0.0.0.0:${PORT}`)
})
