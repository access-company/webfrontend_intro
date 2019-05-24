function showMsgAsync(msg, waitspan) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, waitspan)
    });
}

showMsgAsync('hello', 1000)
    .then(() => showMsgAsync('World', 3000))
    .then(() => showMsgAsync('!', 2000))
    .then(() => showMsgAsync('!', 1000));