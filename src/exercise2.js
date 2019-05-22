const newUser = function() {
  const id = "51ff0475d615329700235136";
  const firstName = "Taro";
  const lastName = "Yamada";
  const fullName = firstName + " " + lastName;
  const age = 14

  return {id, fullName, age};
};
const taro = newUser();
console.log(taro);
