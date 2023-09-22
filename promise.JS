function delay (ms) {
    let seconds = ms / 1000;
    setTimeout(() => {
        console.log(`Успешное выполнение через ${seconds} секунд`);
    }, ms)
}

delay(10000);

function delay2 (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay2(3000).then(() => console.log(`Успешное выполнение через 3000 милисекунд`));