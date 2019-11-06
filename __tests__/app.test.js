'use strict';

jest.mock('fs');

const file = require('./app.js');

describe('tests our alter file library', () => {
  it('can read a file', () => {
    return file.readFile(test)
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy();
      });
   });
   
   it('can write to a file', () => {
     return file.writeFile('test.text', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      })
   })
});