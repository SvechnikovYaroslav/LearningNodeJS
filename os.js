const os = require("os");
const cluster = require("cluster");

console.log(process.platform);
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);


if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork();
    }
} else {
    console.log(`Воркер с pid ${process.pid} запущен`);
    setInterval(() => {
        console.log(`Воркер с pid ${process.pid} все еще работает`)
    }, 5000)
}

