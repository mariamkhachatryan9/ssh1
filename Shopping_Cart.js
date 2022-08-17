// Create a class Product with properties name, type, and price

// Create a class ShoppingCart
// ● In ShoppingCart, define a method addProduct(product)
// In ShoppingCart, define a method removeProduct(product)
// ● In ShoppingCart, define a method totalPrice(), that returns the total amount of
// the products it contains.
// ● Now let's say that, if you buy 5 products or more, you have a 10% discount. Change
// totalPrice to reflect this calculation.
// ● Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils)
// you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8
// pencils you only pay 6, etc. Change totalPrice so it considers the free items you
// get. Notice that if you buy 3 pencils you just pay for the 3 of them.
// ● Sometimes a product is sold out and has to be replaced by a new one. Add a method
// replace(productName, replacementProduct) that looks for products with
// productName and replaces them with new instances of the product like
// replacementProduct. Notice that productName is a string, and
// replacementProduct is a Product


class Product {
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class ShoppingCart{
    constructor(product){
        this.product = product;
    }

    addProduct(product){

    }
    removeProduct(product){

    }
    totalPrice(){
        
    }
}