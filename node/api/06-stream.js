const fs = require("fs");
// read => write 需要把整个文件读到内存中
const rs = fs.createReadStream("./01.jpg");
const ws = fs.createWriteStream("./02.jpg");
rs.pipe(ws);

