// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

function sample() {
  let result = 0

  return sampleResolve(5)
    .then(val => {
      result += val
      return sampleResolve(10)
    })
    .then(val => {
      result += val
      return sampleResolve(20)
    })
    .then(val => {
      result += val
      return result
    })
}

sample().then(v => console.log(v))
