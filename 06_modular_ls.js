var module = require ('./module.js')

var directory = process.argv[2];
var ext = process.argv[3];

module(directory, ext, function(err, files){
  if (err) {
    return console.error('There was an error:', err)
  }
  
  files.forEach(function(file){
    console.log(file)
  })
})


