#!/usr/bin/node
// Script that display the status code of a GET request

const request = require('request');
const process = require('process');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
