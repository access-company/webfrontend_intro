const inspectUser = (user) => {
  const data = user.data;
  const session = data.session;
  console.log(`id = ${data.id}`);
  console.log(`key = ${session.key}`);
  console.log(`expiresAt = ${session.expiresAt}`);
};

inspectUser( {data: {id, session: {key, expiresAt}}}
  = {data: {
    id: "51ff0475d615329700235136",
    session: {
      key: "NoBtELh82txWnMb5kEQJ",
      expiresAt: "2013-10-22T10:04:20+00:00"
    }
  }}
);
