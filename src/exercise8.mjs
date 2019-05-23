import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => myJson.followers_url)
  .then(followersUrl => fetch(followersUrl)
  .then(response => response.json())
  .then(followersJson => console.log(followersJson)));
