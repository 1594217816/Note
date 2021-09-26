// 声明 Promise 构造函数
function Promise(executer) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  // 保存callback
  this.callbacks = [];

  const self = this; // 接受this的参数一般有 that _this
  // 同步调用执行器函数 executer
  function resolve(data) {
    if (self.PromiseState !== 'pending') return;
    // 注意这里的this指向  这里的this指向的是window
    // 1. 修改对象的状态
    self.PromiseState = 'fulfilled';
    // 2. 设置对象结果的值
    self.PromiseResult = data

    // 3. 当promise状态改变之后 调用对应的then方法中的回调函数
    self.callbacks.forEach(item => {
      item.onResolved(data);
    })

  }
  function reject(data) {
    if (self.PromiseState !== 'pending') return;
    // 注意这里的this指向  这里的this指向的是window
    // 1. 修改对象的状态
    self.PromiseState = 'rejected';
    // 2. 设置对象结果的值
    self.PromiseResult = data

    // 3. 当promise状态改变之后 调用对应的then方法中的回调函数
    self.callbacks.forEach(item => {
      item.onRejected(data);
    })
  }

  try {
    executer(resolve, reject);
  } catch (error) {
    console.log(error)
  }

}

// 声明 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
  // Promise构造函数中任务是同步任务
  // 根据 PromiseState 的状态值来决定调用哪个回调函数
  // 这里的this指向的就是promise实例对象
  const self = this;
  // 异常穿透
  if (typeof onRejected !== 'function') {
    onRejected = reason => { throw reason; }
  }
  if (typeof onResolved !== 'function') {
    onResolved = value => value;
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        // onResolved 这个函数返回的结果
        const result = type(self.PromiseResult);

        if (result instanceof Promise) {
          result.then(v => {
            resolve(v);
          }, r => {
            reject(r);
          })
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }

    if (this.PromiseState === 'fulfilled') {
      callback(onResolved);

    }

    if (this.PromiseState === 'rejected') {
      callback(onRejected);

    }

    // Promise构造函数中任务是异步任务
    // 在执行异步任务的时候 因为不能直接执行 所以需要对回调函数进行保存
    // 在异步任务结束完成之后  在执行回调函数

    if (this.PromiseState === 'pending') {
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        }
      });
    }
  })

};

// 封装 cath 方法 和 异常穿透
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
}