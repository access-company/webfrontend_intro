function showMsgAsync(msg, waitspan) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, waitspan)
    });
}

showMsgAsync('hello', 1000)
    .then(p => showMsgAsync('World', 3000))
    .then(p => showMsgAsync('!', 2000))
    .then(p => showMsgAsync('!', 1000));  