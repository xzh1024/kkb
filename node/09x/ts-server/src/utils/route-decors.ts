import * as Koa from "koa";
import * as glob from "glob";
import * as KoaRouter from "koa-router";

type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'patch'

const router = new KoaRouter();

// export const post = (path: string) => {
//   return (target: { [x: string]: string | RegExp; }, property: string | number) => {
//     router[method](path, target[property]);
//   }
// }
const dec = (router) => (method: HTTPMethod) => (path: string) => {
  return (target, property) => {
    router[method](path, target[property]);
  }
}

const createMethod = dec(router);

export const get = createMethod("get");
export const post = createMethod("post");

export const load = (folder: string) : KoaRouter => {
  const extname = '.{js,ts}';
  glob.sync(require("path").join(folder, `./**/*${extname}`))
    .forEach(item => require(item))
  return router;
}