import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(res1 => res1.json())
  .then(myJson => fetch(myJson.followers_url))
  .then(res2 => res2.json())
  .then(flJson => console.log(flJson));
