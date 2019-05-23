import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(json => fetch(json.followers_url))
  .then(followers_res => followers_res.json())
  .then(followers_json => console.log(followers_json));