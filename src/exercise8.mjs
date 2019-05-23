import fetch from 'node-fetch';

async function fetchFollowers() {
  const url = 'https://api.github.com/users/github';
  const userResponse = await fetch(url);
  const json = await userResponse.json();
  const followers = await fetch(json.followers_url);
  return followers.json();
}

fetchFollowers().then((response) =>
  console.log(response)
);