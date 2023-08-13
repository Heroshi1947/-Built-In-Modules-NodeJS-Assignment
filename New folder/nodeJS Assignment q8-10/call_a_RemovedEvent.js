const events = require('events');

const emitter = new events.EventEmitter();

const like = () => {
  console.log('User has liked');
  //emitter.emit('like');
};

emitter.on('like', () => {
  console.log('thanks for liking us.');
});

like();