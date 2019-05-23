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