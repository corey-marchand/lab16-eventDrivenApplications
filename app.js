'use strict';

const fs = require('fs');

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

const readFile = async file => {
  const fsRead = util.promisfy(fs.readFile);
  
  })
};

const capitalizeFile = (data, file) => {
  let text = data.toString().toUpperCase();
  text;
}

const writeFile = (file, data) => {
  fs.writeFile( file, Buffer.from(text), (err, data) => {
    if(err) { throw err; }
    console.log(`${file} saved`);
  })
};

let file = process.argv.slice(2).shift();
alterFile(file);
