import fetch from 'node-fetch';

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  console.log(users);

  const followers_url = await fetch(users.followers_url);
  const followers_list = await followers_url.json();
  console.log(followers_list);  
}

fetchFollowers();
