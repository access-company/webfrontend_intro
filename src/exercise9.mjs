import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json';
  const response = await fetch(url);
  const myJson = await response.json();
  console.log(myJson.followers_url);
}

fetchFollowers();

