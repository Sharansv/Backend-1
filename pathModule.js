const path = require('path')

console.log(path.sep);

//join the paths
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

//to get base file, (here is test.txt file)
const base = path.basename(filePath)
console.log(base);

//print the path with main directory (it is from C:\\NodeJS\first-project\content\subfolder\test.txt)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);
