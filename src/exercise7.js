const printOut = (aisatu, waitTime) => {
  console.log(`${aisatu} (${waitTime}秒後)`);}

// printOut("Hello",1);
// setTimeout(printOut('Hello',1),1000);
// setTimeout(printOut('World',1),3000);
// setTimeout(printOut('!',1),1000);
// setTimeout(printOut('!',1),1000);

// setTimeout(() => {
//   console.log('Hello world!!'); // 1000[ms] 後に 'Hello world!!' が表示される
// }, 1000);

setTimeout(() => {
  printOut("Hello",1);
  setTimeout(()=>{
    printOut("World",3);
    setTimeout(()=>{
      printOut("!",2);
      setTimeout(()=>{
        printOut("!",1);
      },1000);
    },2000);
  },3000);
}, 1000);
// console.log("t");
