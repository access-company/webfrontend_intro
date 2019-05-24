import fetch from 'node-fetch';

async function fetchFollowers() {
  const url = 'https://api.github.com/users/diescake';
  const furlResponse = await fetch(url);
  const furl = await furlResponse.json();
  const followersResponse = await fetch(furl.followers_url);
  const followers = await followersResponse.json();

  console.log(followers);
}

fetchFollowers();
