import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson => fetch(myJson.followers_url))
  .then(response => response.json())
  .then(fjson => console.log(fjson));
