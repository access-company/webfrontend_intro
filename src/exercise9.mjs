import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const followers_res = await fetch(url);
  const followers_json = await followers_res.json();
  console.log(followers_json);
}

fetchFollowers();
