const filename = process.argv[2];
const { error } = require("console");
const crypto = require("crypto");
const fs = require("fs");
const algorithm = "sha256";

if (!fs.existsSync(filename)) {
  console.error("error");
  process.exit(100);
}


if (!fs.existsSync(`${filename}.sha256`)) {
  console.error("error");
  process.exit(101);
}

const hash = crypto.createHash(algorithm);
const input = fs.createReadStream(filename);
input.on('readable', () => {
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    if (hash.digest("hex") === fs.readFileSync(`${filename}.sha256`, "utf-8", () => {})) {
      console.log("OK")
      process.exit(0);
    } else {
      process.exit(102);
    }
  }
});

// const hash = crypto.createHash(algorithm);
// const input = fs.createReadStream(filename);
// input.on('readable', () => {
//   const data = input.read();
//   if (data)
//     hash.update(data);
//   else {
//     // console.log(hash.digest("hex"));
//     // console.log(fs.readFileSync(`${filename}.sha256`, "utf-8", () => {}));
//     if (hash.digest("hex") === fs.readFileSync(`${filename}.sha256`, "utf-8", () => {})) {
//       console.log("OK")
//       process.exit(0);
//     } else {
//       process.exit(102);
//     }
//   }
// });