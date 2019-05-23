import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => console.log(JSON.stringify(myJson,undefined,"🍤")));