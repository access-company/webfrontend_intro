export default class User {
  constructor(id, name, age) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // prototypeメソッド getName()を実装する
  getName() {
    return this.name
  }
  // prototypeメソッド getAge()を実装する
  getAge() {
    return this.age
  }
  // staticメソッド equal(user1, user2)を実装する
  static equal(user1, user2) {
    return (user1.name == user2.name) && (user1.age == user2.age) && (user1.id == user2.id)
  }
}
