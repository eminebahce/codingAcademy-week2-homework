const { ShoppingCart } = require("./ShoppingCart")
const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange;

const person = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 30 },
    { name: "hall", age: 30 },
    { name: "donn", age: 30 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
];
//groupAdultsByAgeRange(person);
//console.log(groupAdultsByAgeRange(person));

const test = groupAdultsByAgeRange([{ name: "Anna", age: 31 }, { name: "John", age: 32 }, { name: "Hank", age: 60 }]);
//console.log(test);




/** 
 * const cart = new ShoppingCart();
console.log(cart.getItems());
cart.addItem('bag', 1, 100);
cart.addItem('clock', 2, 200);
console.log(cart.getItems());
console.log(cart.total());
cart.clear();
console.log(cart.getItems());
*/