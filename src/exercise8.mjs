import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(re=>fetch(re["followers_url"]))
  .then(response => response.json())
  .then(json => console.log(json))

 