
//Using promises
// const fs = require('node:fs/promises');

// (async(path, data) => {
//     try {
//         console.time('writeMany');
//         const fileHandle = await fs.open("./test.txt", "w")
//         for (let i = 0; i < 1000000; i++) {
//              fileHandle.write(` ${i} `);
//         }
//         console.timeEnd("writeMany");
//     } catch (error) {
//         console.log(error);
//     }
// })();


//Execution Time: 8.3s
//CPU Usage: 100% (one core)
//Memory Usage: 50MB
//Using callback
// const fs = require("node:fs");

// (async (path, data) => {
//     console.time("writeMany");
//     fs.open("./test.txt", "w", (err, fileHandle) => {
//       for (let i = 0; i < 1000000; i++) {
//         fs.writeSync(fileHandle, ` ${i} `);
//       }   
//       console.timeEnd("writeMany")
//     });
// })();


//Dont do it this way 
//Execution Time: 8.3s
//CPU Usage: 100% (one core)
//Memory Usage: 50MB
//Using Stream
// const fs = require("node:fs");

// (async (path, data) => {
//     console.time("writeMany");
//     const fileHandle = await fs.promises.open("./test.txt", "w")

//     const stream = fileHandle.createWriteStream();
    
//     for(let i = 0; i < 1000000; i++){
//         const buff = Buffer.from(` ${i}`, "utf-8");
//         stream.write(buff);
//     }

//     console.timeEnd("writeMany")
    
// })();

// const fs = require("node:fs/promises");

// (async () => {
//     // console.time("writeMany");
//     const fileHandle = await fs.open("./test.txt", "w")

//     const stream = fileHandle.createWriteStream();

//     console.log(stream.writableHighWaterMark)
//     console.log(stream.writableLength)

//     // const buff = Buffer.from("This is a content", "utf-8");

//     // stream.write(buff)
//     // console.log(buff)
//     // console.log(stream.writableLength)

//     // 8 bits = 1 byte
//     // 1000 bytes = 1 kilobyte
//     // 1000 kilobytes = 1 megabytes
//     const buff = Buffer.alloc(10000000, 10);
//     console.log(buff)


//     // console.timeEnd("writeMany")
    
// })();

const fs = require("node:fs/promises");

(async () => {
    console.time("writeMany");
    const fileHandle = await fs.open("./test.txt", "w")

    const stream = fileHandle.createWriteStream();

    console.log(stream.writableHighWaterMark)

    // 8 bits = 1 byte
    // 1000 bytes = 1 kilobyte
    // 1000 kilobytes = 1 megabytes
    // const buff = Buffer.alloc(10000000, 10);
    // console.log(buff)

    let i = 0;
    const writeMany = () => {
        while(i < 1000000){
        const buff = Buffer.from(` ${i} `, "utf-8");
            
            
            //this is our last write
            if(i === 999999){
                return stream.end(buff)
            }

            //if strea.write returns false, stop the loop
            if(!stream.write(buff)) break;

            i++;
        }
    }

    writeMany();
    
    //resume our loop once our sream's internal buffer is emptied
    stream.on("drain", () => {
        console.log("draining!!!")
        writeMany();
    })

    stream.on('finish', () => {
        console.timeEnd("writeMany")
        fileHandle.close();

    })
    
})();

