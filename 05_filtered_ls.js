var fs = require ('fs')
var path = require ('path')


fs.readdir(process.argv[2], function (err, list){
  var ext = "." + process.argv[3]
  list.forEach(function(file){
    if (path.extname(file) === ext){
      console.log(file)
    }
  })
})

// official solution

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

// Refactored: 

// var fs = require ('fs')
// var path = require ('path')


// function readDirCallback(err, list)
// {
//   if (err) { return console.error(err); }

//   var ext = "." + process.argv[3]
//   list.forEach(function(file)
//   {
//     if (path.extname(file) === ext)
//     {
//       console.log(file)
//     }
//   });
// }

// fs.readdir(process.argv[2], readDirCallback);
// console.log('here');
