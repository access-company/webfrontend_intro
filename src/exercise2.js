const fullname = 'Taro Yamada';

const newUser = function(id, firstName, lastName, age) {
  const fullName = firstName + " " + lastName;
  return {
    id,
    fullName,
    age,
  };
};
const taro = newUser("51ff0475d615329700235136", "Taro", "Yamada", 14);
console.log(taro);
