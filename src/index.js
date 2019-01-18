const { ShoppingCart } = require("./ShoppingCart")


const cart = new ShoppingCart();
console.log(cart.getItems());
cart.addItem('bag', 1, 100);
cart.addItem('clock', 2, 200);
console.log(cart.getItems());
console.log(cart.total());
cart.clear();
console.log(cart.getItems());