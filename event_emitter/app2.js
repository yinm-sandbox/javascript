const EventEmitter = require('events').EventEmitter

const fs = require('fs')
const path = require('path')

class DirectoryReader extends EventEmitter {
  constructor(targetDirectory) {
    super()
    this.dir = targetDirectory
  }

  read() {
    fs.readdir(this.dir, (err, files) => {
      if (err) {
        return this.emit('error', err)
      }

      files.forEach(file => {
        let content = fs.readFileSync(path.join(this.dir, file), 'utf-8')
        this.emit('data', file, content)
      })

      this.emit('end')
    })
  }
}


let dirReader = new DirectoryReader(`${__dirname}/sampledir`)

dirReader.on('error', err => {
  console.log('エラーだよ ', err)
})

dirReader.on('data', (fileName, content) => {
  console.log(`データを受け取ったよ: fileName=${fileName}, content=${content}`)
})

dirReader.once('data', (fileName, content) => {
  console.log(`データを受け取ったよ(once): fileName=${fileName}, content=${content}`)
})

dirReader.on('end', () => {
  console.log('終わったーよ')
})

dirReader.read()
