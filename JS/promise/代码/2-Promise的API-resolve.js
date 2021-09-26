
let p1 = Promise.resolve(521);
//如果传入的参数为 非Promise类型的对象, 则返回的结果为成功promise对象
//如果传入的参数为 Promise 对象, 则参数的结果决定了 resolve 的结果
let p2 = Promise.resolve(new Promise((resolve, reject) => {
    // resolve('OK');
    reject('Error');
}));
// console.log(p2);
p2.catch(reason => {
    console.log(reason);
})


let p1 = new Promise((resolve, reject) => {
    resolve('OK');
})
// let p2 = Promise.resolve('Success');
let p2 = Promise.reject('Error');
let p3 = Promise.resolve('Oh Yeah');

//
const result = Promise.all([p1, p2, p3]);

console.log(result);