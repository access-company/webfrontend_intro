

setTimeout(() => {
  console.log('Hello');
  setTimeout(() => {
    console.log('World');
    setTimeout(() => {
      console.log('!');
      setTimeout(() => {
        console.log('!');
      }, 1000);
    }, 2000);
  }, 3000);
}, 1000);


const derayPrint = (str,t,) => {
  setTimeout(() => {
   console.log(`${str}`);
  }, t);
  return true;
}

//derayPrint("Hello",100)
//derayPrint("World",300)
//derayPrint("!",200)
//derayPrint("!",100)
