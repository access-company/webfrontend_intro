import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => myJson.followers_url)
  .then(followers_url => fetch(followers_url)
    .then(response => response.json())
    .then(myJson   => console.log(myJson))
    );
