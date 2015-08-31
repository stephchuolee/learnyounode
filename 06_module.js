var fs = require('fs')
var path = require('path')

function getInput(p, ext, callback)
{
  // console.log('Starting Get Input');
  function readDirCallback(err, data)
  {
    // console.log('Read Dir Done');
    if(err) { return callback(err, null); }

    var filtered = data.filter(function(file)
    {
      return path.extname(file) === ext;
    });

    if(filtered.length === 0)
    {
      return callback("No files", null);
    }

    callback(null, filtered);
  }
  
  // console.log('starting read dir')
  fs.readdir(p, readDirCallback);
  return 
}



module.exports = {
  getInput: getInput
}