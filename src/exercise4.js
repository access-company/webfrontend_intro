const printUserInUpperCase = user => {
  const newuser = {...user, name: user.name.toUpperCase()};
  console.log(newuser);
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
