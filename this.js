const basic = {
   
    nameAge : function () {
        return this.firstName+  " " + this.secondName + "'s age is " + this.age + " lives in " + this.address;
    }
}

const info = {
    firstName: "Imran",
    secondName: "Hossain",
    age: 25,
    address: "Dhaka"
}


console.log(basic.nameAge.call(info));
console.log(basic.nameAge.apply(info));