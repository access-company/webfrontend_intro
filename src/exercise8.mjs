import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => fetch(myJson.followers_url))
  .then(followers_url_res => followers_url_res.json())
  .then(followers_json => console.log(followers_json));
