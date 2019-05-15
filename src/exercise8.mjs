import fetch from 'node-fetch';

fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myJson   => console.log(myJson));
