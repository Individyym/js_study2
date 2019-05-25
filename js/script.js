"use strict"

const products = [
    {title: 'Notebook', price: 2000},
    {title: 'Mouse', price: 10},
    {title: 'Keyboard', price: 15},
    {title: 'Display', price: 500},
    {title: 'Router', price: 25},
    {title: 'Speakers', price: 100},
];

const renderProduct = (title, price) => 
     `<div class="product-item">
        <h3>${title}</h3>
        <h3>${price}</h3>
    </div>`
;

const renderPage = list => {
    const productList = list.map ( item => renderProduct (item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productList; 
};

renderPage (products);



// Ниже функция renderProduct в стандарте ES5
// const renderProduct = (title, price) => {
//     return '<div class="product-item">' + '<h3>' + title + '</h3>' + '<h3>' + price + '</h3>' + '</div>'

// };

