import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const res           = await fetch(users.followers_url);
  const json          = await res.json();
  console.log(json);
}

fetchFollowers();
