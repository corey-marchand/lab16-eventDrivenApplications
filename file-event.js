'use strict';



const events = require('./eventEmitter');

eventEmitter.on('file-read', () => {
  console.log('file-read');
});

eventEmitter.on('file-uppercased', text => {
  console.log('file uppercased', text);
});

eventEmitter.on('files-saved', () => {
  console.log('file saved');
});

eventEmitter.on('file-readError', error => {
  console.log('error reading the file', error);
});