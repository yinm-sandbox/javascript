// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

async function sample() {
  return await sampleResolve(5) * await sampleResolve(10) + await sampleResolve(20)
}

async function sample2() {
  const a = await sampleResolve(5)
  const b = await sampleResolve(10)
  const c = await sampleResolve(20)
  return a * b + c
}

sample().then(v => console.log(v))
sample2().then(v => console.log(v))
