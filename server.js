const micro = require('micro')
const { parse } = require('url')
const next = require('next')

const logins = []
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const image = require('./server/image')
const svgExt = /\.svg$/
const pngExt = /\.png$/
const sizePat = /^\d+x\d+$/

const imageRoute = '/gengrad'

const server = micro(async (req, res) => {
	const parsedUrl = parse(req.url, true)
	let { pathname, query } = parsedUrl

	if (pathname.slice(0, imageRoute.length) !== imageRoute)
		return handle(req, res, parsedUrl)
	pathname = pathname.slice(imageRoute.length + 1)
	if (pathname.length === 0) pathname = '/'
	if (pathname === '/') {
		pathname = Math.random().toString()
	} else {
		res.setHeader('Cache-Control', 'max-age=2592000, public')
		res.setHeader('Last-Modified', 'Mon, 03 Jan 2011 17:45:57 GMT')
	}
	console.log(query)
	let height
	if (sizePat.test(query.size)) {
		height = query.size.slice(query.size.indexOf('x') + 1)
		query.size = query.size.slice(0, query.size.indexOf('x'))
	} else {
		height = query.size
	}
	if (query.type === 'svg' || svgExt.test(pathname)) {
		res.setHeader('Content-Type', 'image/svg+xml')
		return image.generateSVG(
			pathname.replace(svgExt, ''),
			query.text || '',
			query.size,
			height || ''
		)
	}
	res.setHeader('Content-Type', 'image/png')
	return image.generatePNG(
		pathname.replace(pngExt, ''),
		query.size,
		height || ''
	)
})

app.prepare().then(() => {
	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
