const express = require('express')
const app = express()
// const path = require('path')
// const logger = require('./logger')
// const authorized = require('./authorized')
// const morgan = require('morgan')
// // app.use([logger, authorized])
// app.use(express.static(path.join(__dirname, './public')))
// app.use(morgan('tiny'))

// app.get('/', (req, res) => {
// 	res.send('Home')
// })

// app.get('/about.html', (req, res) => {
// 	res.send('About')
// })

let { people } = require('./data')
app.use(express.static('./node-express/02-express-tutorial/methods-public'))

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people })
	console.log(people)
})

app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
	let person = req.body
	people.push(person)
	res.status(201).json({ success: true, data: person })
})

app.listen(3000, () => {
	console.log('listening on port 3000...')
})
