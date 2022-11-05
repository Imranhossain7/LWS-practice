const num = [1,3,5,6,7,3,5,3,8,7,10]

const dupliMore = num.filter(function(value,index,arr){
  return arr.indexOf(value) === index && arr.lastIndexOf(value) !== index;
})

console.log(dupliMore);