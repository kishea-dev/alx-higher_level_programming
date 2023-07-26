#!/usr/bin/node
// Script that display number of counts of a character in the episodes

const request = require('request');
const process = require('process');

const url = process.argv[2];
// const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const episodes = JSON.parse(body).results;
    let count = 0;
    for (const episodeIndex in episodes) {
      const characters = episodes[episodeIndex].characters;
      for (const charIndex in characters) {
        if (characters[charIndex].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
