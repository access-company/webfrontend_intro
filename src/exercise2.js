const newUser = function(id, 
                         firstName, 
                         lastName, 
                         age) {
  const fullname = firstName + " " + lastName;
  return {
    id,
    age,
    name: fullname,
  };
};
const taro = newUser("51ff0475d615329700235136", 
                     "Taro", 
                     "Yamada", 
                     14);
console.log(taro);
