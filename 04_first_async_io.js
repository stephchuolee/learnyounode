var fs = require('fs')
var lines = undefined;

fs.readFile(process.argv[2], 'utf8', function (err, fileContents){
    lines = fileContents.split('\n').length -1;
    console.log(lines);
  });



// Alternate solution from documentation: 
// https://github.com/maxogden/art-of-node#callbacks

// function findLines(callback){
//   fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents){
//     lines = fileContents.split('\n').length -1 
//     callback()
//   })
// }


// function logLines() {
//   console.log(findLines)
// }