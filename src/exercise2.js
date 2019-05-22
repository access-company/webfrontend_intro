<<<<<<< HEAD
const newUser = function(id, firstName, lastName, age) {
  const name = firstName + " " + lastName;
  // return {
  //   id: id,
  //   name: fullName,
  //   age: age,
  // };
  const user = {id, name, age};
  return user;
};
const taro = newUser("51ff0475d615329700235136", "Taro", "Yamada", 14);
console.log(taro);
=======
let id = '51ff0475d615329700235136';
let firstName = 'Taro';
let age = 14;

//function(id, firstName, lastName, age) 
const newUser = {id, firstName, lastName:'Yamada', age};
//   const fullName = firstName + " " + lastName;
//   return {
//     id: id,
//     name: fullName,
//     age: age,
//   };
// };
const result = {id : newUser.id, name : newUser.firstName + ' ' +newUser.lastName, age : newUser.age};

console.log(result);
>>>>>>> cbb86c75378fd09fe1dcf51d2c2c8ae22184fdfb
