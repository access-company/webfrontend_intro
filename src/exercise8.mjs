import fetch from 'node-fetch';

fetch('http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json')
  .then(response => response.json())
  .then(myJson   => fetch(myJson.followers_url))
  .then(responce => responce.json())
  .then(json => console.log(json));
