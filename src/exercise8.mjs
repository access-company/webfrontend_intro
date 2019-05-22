import fetch from 'node-fetch';

fetch('http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json')
  .then(response => response.json())
  .then(myJson   => console.log(myJson.followers_url ));
