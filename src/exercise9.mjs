import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const followersRes  = await fetch(users.followers_url);
  const followers     = await followersRes.json();
  console.log(followers);
}

fetchFollowers();
