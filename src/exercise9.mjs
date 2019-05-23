import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users = await usersResponse.json();
  const followersURL = users.followers_url
  const followersResponse = await fetch(followersURL);
  const followers = await followersResponse.json();
  
  console.log(followers);
}

fetchFollowers();
