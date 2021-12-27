const http = require('http')

const server = http.createServer((req, res) => {
	console.log(req.url)
	const url = req.url
	if (url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write('<h1>Hit the server!!</>\n')
		res.end()
	} else if (url === '/api/courses') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify(['node', 'express', 'postgresQL']))
		res.end()
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' })
		res.write('<h1>404 not found</h1>')
		res.end()
	}
})

server.listen(3000)
