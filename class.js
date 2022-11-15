class Person {
    constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName (place){
        console.log(`${this.firstName} ${this.lastName} lives in  ${place}`);
    }
}

const person1 = new Person("Imran","Hossain");
const person2 = new Person("Sazzad","Hossain");

person1.fullName("Dhaka");
person2.fullName("Noakhali")