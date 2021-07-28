const buf1 = Buffer.alloc(10);
console.log(buf1);

buf1.write("hello");
console.log(buf1);
console.log(buf1.toString());

const buf2 = Buffer.from("a");
console.log(buf2);

const buf3 = Buffer.from("中");
console.log(buf3);
console.log(buf3.toString());

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4);
console.log(buf4.toString());