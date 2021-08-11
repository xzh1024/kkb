// function dec (target, property, descriptor) {
//   // 属性描述符
//   const old = descriptor.value;
//   descriptor.value = msg => {
//     msg = `[${msg}]`;
//     return old.apply(null, [msg]);
//   }
// }

// class Log {
//   // 注解
//   @dec
//   print(msg) {
//     console.log(msg);
//   }
// }

function createDec(s) {
  return function (target, property, descriptor) {
    console.log("-----------");
    console.log(target);
    console.log(property);
    console.log(descriptor);
    // 属性描述符
    const old = descriptor.value;
    descriptor.value = msg => {
      msg = `${s}${msg}${s}`;
      return old.apply(null, [msg]);
    }
  }
}

// 注解风格的装饰器
class Log {
  // 注解
  @createDec("===")
  @createDec("***")
  print(msg) {
    console.log(msg);
  }
}

// const dec = (target, property) => {
//   const old = target.prototype[property];
//   target.prototype[property] = msg => {
//     msg = `[${msg}]`;
//     old(msg);
//   }
// }

// const creatDec = s => (target, property) => {
//   const old = target.prototype[property];
//   target.prototype[property] = msg => {
//     msg = `${s}${s}${s}${msg}${s}${s}${s}`;
//     old(msg);
//   }
// }
// const dec = creatDec("=");

// dec(Log, "print");
// dec(Log, "print");
// dec(Log, "print");
// 装饰 [Hello]

const log = new Log();
log.print("Hello");

// function test(...list) {
//   console.log(list);
// }
// const p1 = {
//   name: "xxx",
//   getName: () => {
//     console.log(p1.name);
//   }
// }
// test(p1);