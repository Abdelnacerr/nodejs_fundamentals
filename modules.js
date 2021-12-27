console.log(__dirname)
// setInterval(() => {
// 	console.log('Hello World')
// }, 1000)

const add = (a, b) => {
	console.log(a + b)
}
console.log(add(1, 2))

exports.myDateTime = function () {
	return Date()
}

console.log(module)

const items = ['item1', 'item2']
module.exports = items

console.log(module.exports)
console.log(items)
