import User from './exercise5';


const user3 = new User('51ff0475d6153297002351', 'Turing', 22);
console.log(user3.getName());
console.log(user3.getAge());

const user2 = new User('74ff0520d615329720235156', 'Hanako', 14);
console.log(`${user3.name} is ${user2.name}: ${User.equal(user3, user2)}`);