"use strict"

class ProductList {
    constructor () {
        this.products = [];
        this._init ();
    }
    fetchProducts () {
        this.products = [
            {title: 'Notebook', price: 2000},
            {title: 'Mouse', price: 10},
            {title: 'Keyboard', price: 15},
            {title: 'Display', price: 500},
            {title: 'Router', price: 25},
            {title: 'Speakers', price: 100},
        ]
    }
    _init () {
        this.fetchProducts ();
        this.render ();
    }
    render () {
        const block = document.querySelector('.products');
        this.products.forEach (product => {
            const prod = new Product (product);
            block.insertAdjacentHTML ('beforeend', prod.render());
        })
    }
}

class Product {
    constructor (product, img = "http://placehold.it/200x150") {
        this.title = product.title,
        this.price = product.price, 
        this.img = img
    }
    render () {
       return  `<div class="product-item">
                    <img src="$(this.img)" alt="">
                    <h3>${this.title}</h3>
                    <h3>${this.price}</h3>
                </div>`
    }
}

let products = new ProductList ();

// const renderProduct = (title, price) => 
    //  `<div class="product-item">
    //     <h3>${title}</h3>
    //     <h3>${price}</h3>
    // </div>`
// ;

// const renderPage = list => {
//     const productList = list.map ( item => renderProduct (item.title, item.price)).join('');
//     document.querySelector('.products').innerHTML = productList; 
// };

// renderPage (products);



// Ниже функция renderProduct в стандарте ES5
// const renderProduct = (title, price) => {
//     return '<div class="product-item">' + '<h3>' + title + '</h3>' + '<h3>' + price + '</h3>' + '</div>'

// };

