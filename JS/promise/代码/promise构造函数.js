
/* 
  (resolve, reject) => {}  这个参数交执行器函数，
  当实例化promise构造函数的时候，这个执行器函数会立即执行。
  
  */
let p = new Promise((resolve, reject) => {
  // 同步调用的
  console.log(111);
})

console.log(222);

// 执行结果为  111 222


