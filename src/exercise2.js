const newUser = function(id, firstName, lastName, age) {
  return {
    id: id,
    name: firstName + " " + lastName,
    age: age,
  };
};
const taro = newUser("51ff0475d615329700235136", "Taro", "Yamada", 14);
console.log(taro);
