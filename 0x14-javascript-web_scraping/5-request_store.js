#!/usr/bin/node
// Gets data from a URL and prints it to a file

const fs = require('fs');
const request = require('request');
const process = require('process');

const url = process.argv[2];
const filePath = process.argv[3];
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
