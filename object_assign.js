// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj = {
  foo: 1,
  get bar() {
    return 2
  }
}

let copy = Object.assign({}, obj)
console.log(copy)

function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
      return descriptors
    }, {})

    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym)
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor
      }
    })

    Object.defineProperties(target, descriptors)
  })

  return target
}

copy = completeAssign({}, obj)
console.log(copy)