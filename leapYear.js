function leapYear (year){
    if(year % 4 ===0 && year % 100 !==0){
        console.log(year + " is Leap Year");
    }
    else if(year % 400 ===0 ){
        console.log(year + " is Leap Year");
    }
    else{
        console.log(year + " is not Leap Year");
    }
}

leapYear(2065);