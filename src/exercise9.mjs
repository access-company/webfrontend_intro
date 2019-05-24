import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const response = await fetch(users["followers_url"]);
  const followers = await response.json()
  console.log(followers);
}

fetchFollowers();
