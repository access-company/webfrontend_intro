const printUserInUpperCase = user => {
  const u = {...user, name: user.name.toUpperCase()}
  console.log(u)
  //user.name = user.name.toUpperCase();
  //console.log(user);
};
const userList = [];
const user = {
  id: '51ff0475d615329700235136',
  name: 'taro yamada',
  age: 14,
};
//userList.push(user);
printUserInUpperCase(user);

//console.log(userList[0]);
console.log(user)