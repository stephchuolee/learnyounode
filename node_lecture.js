
var http = require("http");
var handleRequest = function(request, response){
  console.log("Response came in")
}


http.createServer(handleRequest);
http.listen(8081);