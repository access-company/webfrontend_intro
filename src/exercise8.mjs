import fetch from 'node-fetch';

fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myJson   => myJson.followers_url)
  .then(url => fetch(url)
    .then(response => response.json()
    .then(json => console.log(json)))
  )
