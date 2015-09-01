var http = require('http');


// http.get(process.argv[2], function(response){
//   response.on("data", callback(data))
//     // console.log(data.toString())
// })

// function callback(data){
//   console.log(data.toString)
// }

http.get(process.argv[2], function(response){
  response.on("data", function(data){
    console.log(data.toString())
  })
})

// official solution

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })