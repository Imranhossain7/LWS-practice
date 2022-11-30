// will check if divisible
function divisible (m,n) {
    for(i = m; i<= n; i++){
        if( i % 15 === 0){
            console.log(`${i} is Divisible by 3 & 5`);
        }
        else if( i % 3 === 0){
            console.log(`${i} is Divisible by 3`);
        }
        else if( i % 5 === 0){
            console.log(`${i} is Divisible by 5`);
        }
        else{
            console.log(`${i} is Not Divisible by either`)
        }
    }
}

// input the range of the numbers
divisible(30,100);