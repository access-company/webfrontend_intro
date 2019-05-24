import fetch from 'node-fetch';

// 非同期に処理するAPI
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myjson  => fetch(myjson.followers_url))
  .then(responce => responce.json())
  .then(myjson => console.log(myjson))

// こちらが先に出力される
console.log("hello")