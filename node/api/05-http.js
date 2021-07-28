const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  // Stream
  // TODO 为什么要用流
  // console.log("this is request", getPrototypeChaim(response));
  // response.end("hello node");

  const { url, method, headers } = request;
  console.log("url:", url);
  console.log("method:", method);
  console.log("headers:", headers);
  if(url === "/" && method === "GET") {
    console.log("根目录");
    fs.readFile("./index.html", (err, data) => {
      if(err) {
        response.writeHead("500", {
          "Content-Type": "text/plain;charset=utf-8"
        });
        response.end("500 出错鸟。。。");
        return;
      }
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    });
  } else if(method === "GET" && headers.accept.indexOf("image/*") !== -1) {
    // 图片服务
    // 图片比较大
    fs.createReadStream("." + url).pipe(response);
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain;charset=utf-8");
    response.end("404 没找到");
  }
  // response.write("123");
  // response.end();
})
.listen(3000, () => {
  console.log("监听3000端口");
});

// function getPrototypeChaim(obj) {
//   const protoChain = [];
//   while(obj = Object.getPrototypeOf(obj)) {
//     protoChain.push(obj);
//   }
//   return protoChain;
// }