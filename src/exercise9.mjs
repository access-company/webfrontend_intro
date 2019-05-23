import fetch from 'node-fetch';

async function fetchFollowers() {
  const url = 'http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json';
  const res = await fetch(url);
  const json = await res.json();
  const res2 = await fetch(json.followers_url);
  console.log(await res2.json());
}

fetchFollowers();
