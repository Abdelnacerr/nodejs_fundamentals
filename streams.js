const fs = require('fs')
const http = require('http')
const { createReadStream } = require('fs')

const stream = createReadStream('./bigfile.txt', { highWaterMark: 11 })

stream.on('data', (result) => {
	console.log(result.toString())
})
stream.on('error', (err) => {
	console.log(err)
})

http.createServer((req, res) => {
	// const text = fs.readFileSync('./bigfile.txt', 'utf8')
	// res.end(text)
	const filestream = fs.createReadStream('./bigfile.txt', 'utf-8')
	filestream.on('open', () => {
		filestream.pipe(res)
	})
	filestream.on('error', (error) => {
		res.end(error.toString())
	})
}).listen(3000)
