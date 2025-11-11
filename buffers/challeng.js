// challenge:
// write this binnary to the memory
// 0100 1000 0110 1001 0010 0001

const {Buffer} = require('buffer');

const memoryContainer = Buffer.alloc(3);

memoryContainer[0] = 0x48 // H
memoryContainer[1] = 0x69; // i
memoryContainer[2] = 0x21; // !

console.log(memoryContainer);
console.log(memoryContainer.toString());
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer.toString('utf-8'));