import fetch from 'node-fetch';

async function fetchFollowers() {
  const url               = 'https://api.github.com/users/diescake';
  const userResponse      = await fetch(url);
  const userJson          = await userResponse.json();
  const followersResponse = await fetch(userJson.followers_url);
  const followersJson     = await followersResponse.json();
  console.log(followersJson);
}

fetchFollowers();
