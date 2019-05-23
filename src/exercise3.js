
const inspectUser = user => {
  // destructuring for object
  // Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const {
    data: {
      id,
      session: {key, expiresAt}
    }
  } = user
  
  console.log("id = " + id);
  console.log("key = " + key);
  console.log("expiresAt = " + expiresAt);
};

inspectUser({
  email: 'my@email.addr',
  name: 'Taro Access',
  data: {
    id: "51ff0475d615329700235136",
    session: {
      key: "NoBtELh82txWnMb5kEQJ",
      expiresAt: "2013-10-22T10:04:20+00:00",
    },
  },
});
