// subscribe event 
const events = require('events');

const emitter = new events.EventEmitter();

const subscribe = () => {
  console.log('User has subscribed!');
  emitter.emit('subscribe');
};

emitter.on('subscribe', () => {
  console.log('thanks for subscribing to college wallah.');
});

subscribe();