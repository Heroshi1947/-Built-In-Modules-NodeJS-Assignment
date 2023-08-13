const events = require('events');

const emitter = new events.EventEmitter();

const subscribe = () => {
  console.log('User has subscribed!');
  emitter.emit('subscribe');
};

const maxListeners = 5;

emitter.setMaxListeners('subscribe', maxListeners);

emitter.on('subscribe', subscribe);

emitter.on('subscribe', subscribe);

emitter.on('subscribe', subscribe);

emitter.on('subscribe', subscribe);

emitter.on('subscribe', subscribe);

try {
  emitter.on('subscribe', subscribe);
} catch (error) {
  console.log(error);
}