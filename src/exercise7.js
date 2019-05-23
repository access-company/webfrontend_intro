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
