const events = require('events')
const emitter = new events.EventEmitter()

const eventHandler = (name) => console.log('Hello ' + name)

emitter.on('myEvent', eventHandler)

emitter.emit('myEvent', 'John') // Hello John
