const { rejects } = require("assert");
const { error } = require("console");
const fs = require("fs");
const path = require("path");

// fs.writeFileSync("text.txt", "la la la la la la", "utf-8");
// fs.readFileSync("./text.txt", "utf-8", (err, data) => {
//   fs.mkdirSync("./files", () => {});
//   fs.writeFileSync("./files/text2.txt", data, (err) => {
//     err ? console.log(err) : null;
//   });
// });

// fs.appendFileSync(
//   path.resolve(__dirname, "files", "text2.txt"),
//   "Добавил в конец",
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("OK");
//     }
//   }
// );

// setTimeout(() => {
//   if (fs.existsSync("./files/text2.txt")) {
//     fs.unlink("./files/text2.txt", () => {});
//   }
// }, 50000);
// setTimeout(() => {
//   if (fs.existsSync("./files")) {
//     fs.rmdir("files", () => {});
//   }
// }, 80000);

// fs.mkdirSync(
//   path.resolve(
//     __dirname,
//     "new-directory",
//     "new-inner-directory",
//     "new-inner directory-2"
//   ),
//   { recursive: true }
// );

// console.log("START");

// fs.mkdir(
//   path.resolve(__dirname, "async-dir", "async-dir2", "async-dir3"),
//   { recursive: true },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Directory created");
//     }
//   }
// );

// console.log("END");

// const result = await fs.promises.readFile("6gb_video.mp4");
// // если файл слишком большой, тоо....
// const result2 = fs.createReadStream("6gb_video.mp4", { highWaterMark: 10000 });
// for await (const data of result2) {
//   // do smth
// }

// На промисах
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

writeFileAsync(path.resolve(__dirname, "test.txt"), "data ")
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123 "))
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456 "))
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789 "))
  .catch((err) => console.log(err));
