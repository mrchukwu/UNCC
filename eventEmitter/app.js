const EventEmitter  = require('events');

class Emitter extends EventEmitter {};

const myE = new Emitter();

myE.on("greet", () => {
    console.log("Hello there!, an event was emitted 1");
});

myE.on("greet", () => {
    console.log("Hello there!, an event was emitted 2");
});

myE.on("greet", (data) => {
    console.log("Hello there!, an event was emitted 3, with data:", data);
});

myE.once("Hello", () => {
    console.log("This will only be logged once");
})

myE.emit("greet", "This is some data");
myE.emit("greet");
myE.emit("Hello");
myE.emit("Hello");
myE.emit("Hello");      
