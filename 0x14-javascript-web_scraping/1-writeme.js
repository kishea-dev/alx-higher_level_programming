#!/usr/bin/node
// Script that writes a string to a file.

const fs = require('fs');
const process = require('process');

const content = process.argv[3];
fs.writeFile(process.argv[2], content, err => {
  if (err) {
    console.error(err);
  }
});
