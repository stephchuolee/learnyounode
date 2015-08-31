function sum(array){
  var length = array.length
  var total = 0 

  for (i=2; i<length; i++){
    total += +array[i];
  }
  return total
}

console.log(sum(process.argv))


// Official Answer: 
// var result = 0 
// for (var i=2; i<process.argv.length; i++){
//   result += Number(process.argv[i])
// }
// console.log(result)