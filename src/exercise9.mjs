import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const response = await fetch(url);
  const json = await response.json();
  const followers_res = await fetch(json.followers_url);
  const followers_json = await followers_res.json();
  console.log(followers_json);
}

fetchFollowers();
