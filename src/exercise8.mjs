import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(json   => fetch(json.followers_url))
  .then(follower_res => follower_res.json())
  .then(follower_json => console.log(JSON.stringify(follower_json, undefined, "🍤"))); //エビチリ入れたい!