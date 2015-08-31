var fs = require('fs')
var lines = undefined;

fs.readFile(process.argv[2], 'utf8', function (err, fileContents){
    lines = fileContents.split('\n').length -1;
    console.log(lines);
  });
