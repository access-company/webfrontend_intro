import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => fetch(myJson.followers_url))
  .then(responce => responce.json())
  .then(json => console.log(json));
