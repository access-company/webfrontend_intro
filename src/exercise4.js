const printUserInUpperCase = user => {
  const uu = { ...user, name: user.name.toUpperCase() }
  // user.name = user.name.toUpperCase();
  console.log(uu);
};
const userList = [];
const user = {
  id: '51ff0475d615329700235136',
  name: 'taro yamada',
  age: 14,
};
userList.push(user);
printUserInUpperCase(user);

console.log(userList[0]);
