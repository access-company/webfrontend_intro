import fetch from 'node-fetch';

fetch('http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json')
  .then((res) => res.json())
  .then((json) => json.followers_url)
  .then((data) => console.log(data));
