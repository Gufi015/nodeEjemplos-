var events = require('events');

var eventEmitter = new events.EventEmitter();


var myEventHandlee = function(){
    console.log('I hear scream');
};

eventEmitter.on('scream',myEventHandlee);

eventEmitter.emit('scream');