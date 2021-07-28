// 聊天服务器
// 接受连接
// 收到消息 就广播

const net = require("net");
const chatServer = net.createServer();
const clientList = [];
chatServer.on("connection", client => {
  client.write("Hi!\n");
  clientList.push(client);

  client.on("data", data => {
    console.log("rece:", data.toString());
    clientList.forEach(v => {
      v.write(data);
    });
  });
});

chatServer.listen(9000, () => {
  console.log("9000 端口...");
});
