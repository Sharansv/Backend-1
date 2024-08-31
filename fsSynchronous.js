//TO read the contents inside the other modules using File System Module (FS)
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);


//create new file using writeFileSync in File System
writeFileSync('./content/result-sync.txt', `This is the result of : ${first}, ${second}`, {flag:'a'})

console.log('done with this task');
console.log('Starting the next one');
