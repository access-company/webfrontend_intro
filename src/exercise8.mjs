import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(json     => fetch(json.followers_url))
                    .then(res => res.json())
                    .then(res => console.log(res));