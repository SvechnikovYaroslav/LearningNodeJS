const fs = require("fs").promises;
const path = require("path");

const writeFileWithCheck = (path, data) => {
  return fs
    .writeFile(path, data)
    .then(() => {
      return fs.readFile(path, "utf-8");
    })
    .then((readData) => {
      if (readData !== data) {
        throw new Error("Data mismatch");
      }
    });
};

const readFileSafe = (path, defaultData) => {
  return fs
    .readFile(path, "utf-8")
    .then((data) => data)
    .catch((err) => {
      if (err.code === "ENOENT") {
        return defaultData;
      }
      return err;
    });
};

const getWithCashe = (url, cb) => {
  if (cashe[url]) {
    cb(null, cashe[url]);
    return;
  }
  httpLib.get(url, (err, data) => {
    if (!err) {
      cashe[url] = data;
    }
    cb(err, data);
  });
};

const getWithCashPromise = (url) => {
  if (cashe[url]) {
    return Promise.resolve(cashe[url]);
  }
  return httpLib.get(url).then((data) => {
    cashe[url] = data;
    return data;
  });
};

// Promisify
const util = require("util");

const promisify = util.promisify(fs.stat);
stat("some-file-text.txt")
  .then((stats) => {
    console.log(stats);
  })
  .catch((err) => {
    console.error(err);
  });

  const callApi = async () => {
    const response = await fetch("https://api.example.com/whatever");
    const data = await response.json();
    console.log(data);
    console.log(response.headers["token"]);
  }