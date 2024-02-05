const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please turn off the motor!');

  setTimeout(()=>{
  console.log('please turn off the motor! its gentle remainder');
  }, 3000);
});

console.log("Script is running");
myEmitter.emit('waterFull');
console.log("Script is still running");


// console.log(myEmitter);