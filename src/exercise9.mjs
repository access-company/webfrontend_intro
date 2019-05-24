import fetch from 'node-fetch';

async function fetchFollowers() {
  //const url           = 'http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json';
  const url           = 'https://api.github.com/users/diescake';
  const response = await fetch(url);
  const myJson = await response.json();
  const response2 = await fetch(myJson.followers_url);
  const myJson2 = await response2.json();
  //const myJson2 = await response2.json();
  console.log(myJson2);
}

fetchFollowers();

