function largestStr(arr){

let largest = " ";
for(i of arr){
    if(i.length > largest.length){
        largest = i;
    }   
}
return (`${largest} is at the position ${names.indexOf(largest)}`); 

// By using array 

// return[largest,names.indexOf(largest)];

}

const names = ['Imran', 'Jahid','Dhrubo','Sabbir', 'Sazzad'];

console.log(largestStr(names));