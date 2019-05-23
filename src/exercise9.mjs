import fetch from 'node-fetch';

async function fetchFollowers() {
  const url               = 'https://api.github.com/users/diescake';
  const usersResponse     = await fetch(url);
  const users             = await usersResponse.json();
  const followersResponce = await fetch(users.followers_url);
  const followers         = await followersResponce.json();
  console.log(followers);
}

fetchFollowers();
