import fetch from 'node-fetch';

fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => fetch( myJson.followers_url ))
  .then(response => response.json())
  .then(myJson   => console.log(myJson));

//fetch('http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json')
/*fetch('https://api.github.com/users/diescake')
  .then(response => response.json())
  .then(myJson   => fetch( myJson.followers_url )
    .then(response => response.json())
    .then(myJson   => console.log(myJson))
  );
*/


