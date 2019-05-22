import fetch from 'node-fetch';

const fetchFollowers = (url) =>  {
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
}

fetch('http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json')
  .then(res => res.json())
  .then(json => json.followers_url)
  .then(url => fetchFollowers(url));
