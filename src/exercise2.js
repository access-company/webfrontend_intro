const newUser = function(id, 
                         firstName, 
                         lastName, 
                         age) {
  const name = firstName + " " + lastName;
  return {
    id: id,
    name,
    age: age,
  };
};
const taro = newUser("51ff0475d615329700235136", 
                     "Taro", 
                     "Yamada", 
                     14);
console.log(taro);
