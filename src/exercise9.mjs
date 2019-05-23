import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const followers_url = await users.followers_url;
  const response      = await fetch(followers_url);
  const myJson        = await response.json();
  console.log(myJson);
}

fetchFollowers();
