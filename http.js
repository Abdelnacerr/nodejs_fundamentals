const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to our home page!')
	}
	if (req.url === '/about') {
		res.end('Welcome to our about page!')
	}
	res.end(`
    <h1>Ooooops!</h1>
    <p>We can't see to find the page you're looking for.</p>
    <a href="/">Go back to the home page</a>
    `)
})
server.listen(3000, () => {
	console.log('Server is listening on port 3000')
})
