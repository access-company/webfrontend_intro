
setTimeout(() => {
  console.log('Hello');
    setTimeout(() => {
      console.log('World');
        setTimeout(() => {
          console.log("!");
            setTimeout(() => {
              console.log("!");
            }, 1000); // 1秒後に"!"を出力
        }, 2000); // 2秒後に"!"を出力
    }, 3000); // 3秒後に"World"を出力
}, 1000); // 1秒後に"Hello"を出力
