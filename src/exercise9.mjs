import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const followers     = await fetch(users.followers_url);
  const followersJson = await followers.json();
  console.log(followersJson);
}

fetchFollowers();
