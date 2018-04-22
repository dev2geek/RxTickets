'use strict';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

myEmitter.on('goal', (a, b) => {
  console.log('Goal Goal Goal!');
  console.log(a);
  console.log(b);
  console.log(this);
});

myEmitter.emit('goal', '40min', 'Jordan');

const yourEmitter = new MyEmitter();

yourEmitter.on('error', (err) => {
  console.error(`there is an error: ${err}`);
});

yourEmitter.emit('error', new Error('whoops'));

