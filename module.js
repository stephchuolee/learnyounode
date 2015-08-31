var fs = require('fs')
var path = require('path')

module.exports = function (dirname, ext, callback){
  
  fs.readdir(dirname, function(err, data){
    var extension = "." + ext;

    if (err) { 
      return callback(err, null)
    }
   
    filtered = data.filter(function(file){
      return path.extname(file) === extension 
    })
    
    callback(null, filtered)
    
  })

};
