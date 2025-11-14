const {Buffer} = require('buffer');

const buffer = Buffer.alloc(10000, 0); //this allocates a buffer of 10,000 bytes initialized to 0

const unsafeBuffer = Buffer.allocUnsafe(10000); //this is faster but may contain old data 

for (let i = 0; i < unsafeBuffer.length; i++){
    if(unsafeBuffer[i] !== 0){
        console.log(`Element at position ${i} has value: ${unsafeBuffer[i].toString(2)}`);
    }
}




