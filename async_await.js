// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 500)
  })
}

function sampleResolve2(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2)
    }, 400)
  })
}

function sample() {
  const promiseA = sampleResolve(5)
  const promiseB = sampleResolve(10)
  const promiseC = promiseB.then(value => {
    return sampleResolve2(value)
  })

  return Promise.all([promiseA, promiseB, promiseC])
    .then(([a, b, c]) => {
      return [a, b, c]
    })
}

sample().then(([a, b, c]) => {
  console.log(a, b, c)
})
