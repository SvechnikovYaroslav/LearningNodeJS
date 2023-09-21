const { error } = require("console");
const crypto = require("crypto");
const fs = require("fs");
const file = process.argv[2];
const hashFile = `${file}.sha256`;

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(100);
  }

  const hash = crypto.createHash("sha256").update(data).digest("hex");
  fs.readFile(hashFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(101);
    }
    if (hash != data.trim()) {
      process.exit(102);
    } else {
      console.log("data");
    }
  });
});
