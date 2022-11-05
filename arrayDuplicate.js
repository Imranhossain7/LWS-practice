const num = [1,3,5,6,7,3,5,3,8,7,10,1]

const dupli = num.filter(function(value,index,array){
  return array.indexOf(value) !== index;

})

console.log(dupli);