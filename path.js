const path = require("path");
console.log("Склеивает участки пути", path.join(__dirname, "first", "second", "third.js"));
console.log("Возвращает с абсолютным путем", path.resolve("first", "second", "third.js"));

const fullPath = path.join(("first", "second", "third.js"));
console.log("Объект с корнем, папкой, расширением, именем", path.parse(fullPath));

console.log("Разделитель в ОС", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute(fullPath));
console.log("Название файла", path.basename(fullPath));
console.log("Расширение файла", path.extname(fullPath));