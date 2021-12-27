const path = require('path')
console.log(path.basename(__filename)) //current filename
console.log(path.sep) //separator
const filepath = path.join(__dirname, 'test', 'hello.txt') //normalized path
console.log(filepath)
console.log(path.resolve(filepath)) //absolute path
