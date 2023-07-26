#!/usr/bin/node
// script that computes the number of tasks completed by user id.
// API URL: https://jsonplaceholder.typicode.com/todos

const request = require('request');

const url = process.argv[2];
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const completed = {};
    const tasks = JSON.parse(body);
    for (const i in tasks) {
      const task = tasks[i];
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId]++;
        }
      }
    }
    console.log(completed);
  }
});
