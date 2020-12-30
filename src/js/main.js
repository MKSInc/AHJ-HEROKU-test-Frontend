/* eslint-disable no-console */
console.log('main.js run');

function sendQuery(url) {
  const xhr = new XMLHttpRequest();

  xhr.open('PUT', url);

  xhr.addEventListener('load', () => {
    console.log('Loaded:', url);
    console.log('Response:', xhr);
  });

  xhr.addEventListener('error', () => {
    console.log('error', xhr);
  });

  xhr.send();
}

// sendQuery('http://localhost:7070/about');

sendQuery('https://heroku-server-node-js-test.herokuapp.com');

sendQuery('https://heroku-server-koa-test.herokuapp.com');
