import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const followerResponse = await fetch(users.followers_url);
  const followers = await followerResponse.json();
  console.log(followers);
}

fetchFollowers();
