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
app.use(express.json())

app.post('api/people', (req, res) => {
	const { name } = req.body
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'please provide name value' })
	}
	people.push(name)
	res.status(201).send({ success: true, person: name })
})

app.post('api/postman/people', (req, res) => {
	const { name } = req.body
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'please provide name value' })
	}
	people.push(name)
	res.status(201).send({ success: true, data: [...people, name] })
	console.log(id, name)
})

app.put('api/people:id', (req, res) => {
	const { id } = req.params
	const { name } = req.body
	console.log(id, name)
})

app.delete('api/people:id', (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id))
	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no person with id ${req.params.id}` })
	}
	const newPeople = people.filter(
		(person) => person.id !== Number(req.params.id)
	)
	return res.status(200).json({ success: true, data: newPeople })
})

app.listen(3000, () => {
	console.log('listening on port 3000...')
})
