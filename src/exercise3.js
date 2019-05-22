const inspectUser = (user) => {
  // const data = user.data;
  // const session = data.session;
  const data = user.data

  console.log(`id = ${data.id}`);
  console.log(`key = ${data.session.key}`);
  console.log(`expiresAt = ${data.session.expiresAt}`);
};

inspectUser({
  data: {
    id: "51ff0475d615329700235136",
    session: {
      key: "NoBtELh82txWnMb5kEQJ",
      expiresAt: "2013-10-22T10:04:20+00:00",
    },
  },
});
