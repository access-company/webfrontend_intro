import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();

  const followersResponse = await fetch(users.followers_url);
  const followers = await followersResponse.json();
  
  console.log(JSON.stringify(followers, undefined, "🍙")); //rice ball
}

fetchFollowers();