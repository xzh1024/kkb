import * as Koa from 'koa';
import { get, post } from '../utils/route-decors';

const users = [
  {
    name: "tom",
    age: 20
  }
];

export default class User {
  // 使用装饰器完成路由注册
  @get("/users")
  public list(ctx: Koa.Context) {
    ctx.body = {
      ok: 1,
      data: users
    };
  }

  @post("/users")
  public add(ctx: Koa.Context) {
    users.push(ctx.request.body);
    ctx.body = {
      ok: 1
    };
  }
}