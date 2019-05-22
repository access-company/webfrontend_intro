const inspectUser = function(user) {
  const {data: {id, session: {key, expiresAt}}} = user
  
  console.log("id = " + id);
  console.log("key = " + key);
  console.log("expiresAt = " + expiresAt);
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
