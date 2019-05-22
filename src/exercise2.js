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
