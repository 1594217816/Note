// 获取奶茶的方法
function getTea(fn) {
  setTimeout(() => {
    fn('奶茶');
  }, 1000)
}

// 获取果汁的方法
function getGuozhi(fn) {
  setTimeout(() => {
    fn('果汁');
  }, 800);
}

getTea(function (data) {
  console.log(data)
  getGuozhi(function (data) {
    console.log(data)
    getGuozhi(function (data) {
      console.log(data)
      getGuozhi(function (data) {
        console.log(data)
        getGuozhi(function (data) {
          console.log(data)
        })
      })
    })
  })
})

