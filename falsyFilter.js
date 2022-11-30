const falsyArr = [
    false,
    10,
    'Imran',
    NaN,
    {
        name: " Sazzad",
        lastName: "Hossain"
    },
    undefined,
    null,
    [
        1,3,5
    ]
]

//original falsy array
console.log(falsyArr);


// usingg normal filter
/*
const trueArr = falsyArr.filter(function(e){
    if(e){
        return true;
    }
    else{
        return false;
    }
})
*/

//using Boolean with filter
const trueArr = falsyArr.filter(Boolean)

//modified valid array
console.log(trueArr);