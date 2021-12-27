const EventEmitter = require('events')

const customEventEmitter = new EventEmitter()

customEventEmitter.on('customEvent', (name, id) => {
	console.log(`${name} with id ${id}`)
})

customEventEmitter.emit('customEvent', 'mohamed', 4970)
