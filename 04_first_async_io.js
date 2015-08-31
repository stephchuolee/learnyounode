var fs = require('fs')
var lines = undefined

function findLines(callback){
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents){
    lines = fileContents.split('\n').length -1 
    callback()
  })
}


function logLines() {
  console.log(lines)
}

findLines(logLines)

