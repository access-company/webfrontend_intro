const inspectUser = ({data: {id, session: {key, expiresAt}}}) => {

  console.log('id = ${id}');
  console.log('key = ${key}');
  console.log('expiresAt = ${expiresAT}');
};

inspectUser({
  data: {
    id: '51ff0475d615329700235136',
    session: {
      key: 'NoBtELh82txWnMb5kEQJ',
      expiresAt: '2013-10-22T10:04:20+00:00',
    },
  },
});




// const {id2, session2: {key2, expiresAt2}} = {id2: "id = 51ff0475d615329700235136", session2: {key2: "key = NoBtELh82txWnMb5kEQJ", expiresAt2: "expiresAt = 2013-10-22T10:04:20+00:00"}}

// console.log("-------------------")
// console.log(id2);
// console.log(key2);
// console.log(expiresAt2);
// console.log("-------------------")

// function createArray() {
//   return ["id = 51ff0475d615329700235136", "key = NoBtELh82txWnMb5kEQJ", "expiresAt = 2013-10-22T10:04:20+00:00"];
// }

// const [d, e, f] = createArray();
// console.log(d); 
// console.log(e);
// console.log(f);