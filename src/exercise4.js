const printUserInUpperCase = user => {
  const u = {...user, name: user.name.toUpperCase()}
  console.log(u);
};
const userList = [];
const user = {
  id: '51ff0475d615329700235136',
  name: 'taro yamada',
  age: 14,
};
userList.push(user);
printUserInUpperCase(JSON.parse(JSON.stringify(user)));

console.log(userList[0]);
