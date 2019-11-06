'use strict';

exports.readFile = (file, cb) => {
  if(!file || file.match(/bad/i)){
    cb('invalid file');
  } else {
    cb(undefined, new Buffer('File contents'))
  }
};

exports.writeFile = (file, buffer, cb) => {
  if(!file || file.match(/bad/i)){
    cb('invalid file');
  } else if (!Buffer.isBuffer(buffer)) {
    cb('invalid buffer');
  }
  cb(undefined, undefined);
};

