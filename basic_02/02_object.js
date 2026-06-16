//we can create an object in two way  in js , using Object.create() which is through constructor (singleton) and another way is using the literals.

const myObj = {
    name : "Manoj",
    "full name":"manoj Kumar Mishra",
    email: "mail4mmishra@gmail.com",
    greeting: function(){
        console.log(`Hello JS User ${this.name}`)
    }
}

// console.log(myObj.greeting());
// console.log(myObj["full name"]);
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
