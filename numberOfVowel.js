function vowelCount(s){
    var count=0;
    let letters = Array.from((s).toLowerCase())

    letters.forEach(function(value){      
     if(vowel.includes(value))
     count++;
    });
    return count;
    }
   
let vowel = ['a','e','i','o','u'];
let s = "Imran Hossain Shakil"
console.log(vowelCount(s));