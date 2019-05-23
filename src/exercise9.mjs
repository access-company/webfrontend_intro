import fetch from 'node-fetch';

// fetch('https://api.github.com/users/diescake')
//   .then(response => response.json())
//   .then(myJson  => fetch(myJson.followers_url))
//   .then(response => response.json())
//   .then(json => console.log(json))

async function fetchFollowers() {
  const url           = 'https://api.github.com/users/diescake';
  const usersResponse = await fetch(url);
  const users         = await usersResponse.json();
  const fol_url       = await users.followers_url;
  const for_Response  = await fetch(fol_url);
  const fols          = await for_Response.json();
  console.log(fols);
}

fetchFollowers();
