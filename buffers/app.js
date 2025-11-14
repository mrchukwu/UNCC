const {Buffer} = require("buffer");

const memoryContainer = Buffer.alloc(4)

memoryContainer[0] = 0x00
memoryContainer[1] = 0x42
memoryContainer.writeInt8(-0x43, 2);
memoryContainer[3] = 0xff   

console.log(memoryContainer)
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer.readInt8(2));
console.log(memoryContainer[3]);


 