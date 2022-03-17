// Console Error and Console Warn

console.warn('eee')
console.error('eee')

const languages = [
  {
    name: 'Javascript',
    hello: 'heyy'
  },
  {
    name: 'Python',
    hello: 'hey'
  },
  {
    name: 'Golang',
    hello: 'h'
  }
]

console.table(languages)

const hello = document.getElementById('hello')
console.dir(hello)

// console.clear()

console.group('Hello')
console.log('log 1')
console.log('log 2')
console.log('log 3')
console.groupEnd()

console.time('for-loop')
for(i = 0; i > 1000; i++) {
  console.log(i)
}
console.timeEnd('for-loop')