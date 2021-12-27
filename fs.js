const fs = require('fs')

const a = fs.readFileSync('./textfile.txt', 'utf8')
console.log(a)

fs.writeFileSync('./textfile2.txt', 'Hello World!', 'utf8') //write to file

fs.writeFileSync('./textfile2.txt', 'Hello World again!', { flag: 'a' }) //append to file

fs.readFile('./textfile.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err.message)
	} else {
		fs.writeFile('./textfile2.txt', 'Hello World again!', (err, result) => {
			if (err) {
				console.log(err.message)
			} else {
				console.log('File written successfully')
			}
		})
	}
})

const startReading = async () => {
	try {
		const first = await getText('./textfile2.txt', 'utf8')
		const second = await getText('./textfile.txt', 'utf8')
		console.log(first, second)
	} catch (err) {
		console.log(err.message)
	}
}
