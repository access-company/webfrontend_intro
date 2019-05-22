import UserClass from './exercise5';

const user1 = new UserClass('51ff0475d615329700235136', 'Taro', 14);
console.log(user1.getName());
console.log(user1.getAge());

const user2 = new UserClass('74ff0520d615329720235156', 'Hanako', 14);
console.log(`${user1.name} is ${user2.name}: ${UserClass.equal(user1, user2)}`);