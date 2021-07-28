// const fs = require("fs");

// // 读文件的api buffer对象
// fs.readFile("./config.json", (err, data) => {
//   if(err) throw err;
//   console.log("data：", data.toString());
// })

// const data = fs.readFileSync("./config.json")
// 阻塞
// console.log("sync", data, data.toString());

// console.log("read...");

// promise风格 async/await
console.log(this);
(async () => {
  function name() {
    this.name = 666;
    console.log(this);
  }
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./config.json");
  console.log("----------");
  console.log("data", data.toString());
  name();
})();
