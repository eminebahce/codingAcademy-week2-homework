class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }

    addItem(itemName, quantity, price) {
        this.items = [...this.items, { 'name': itemName, 'quantity': quantity, 'pricePerUnit': price }];
    }

    clear() {
        this.items = [];
    }

    total() {
        return this.items.map(item => item.quantity * item.pricePerUnit).reduce((acc, current) => {
            return acc + current;
        }, 0)
    }
}

module.exports.ShoppingCart = ShoppingCart;