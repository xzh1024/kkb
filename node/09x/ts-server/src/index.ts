import * as Koa from 'koa';
import * as bodify from 'koa-bodyparser';
import * as Router from 'koa-router';
import { load } from './utils/route-decors';
import { resolve } from 'path';
// import * as serve from 'koa-static';
// import * as timing from 'koa-xtime';
const app = new Koa();

// app.use(timing());
// app.use(serve(`${__dirname}/public`));
app.use(
  bodify({
    // multipart: true, // 使用非严格模式，解析 delete 请求的请求体
    strict: false,
  }),
);

// app.use((ctx: Koa.Context) => {
//   ctx.body = 'hello'
// })

// const router = new Router();
// router.get("/abc", ctx => {
//   ctx.body = "abc";
// })

// app.use(router.routes());

const router = load(resolve(__dirname, './routes'));
console.log(resolve(__dirname, './routes'));
app.use(router.routes());

app.listen(3000, () => {
  console.log('服务器启动成功');
});