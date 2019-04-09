import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    console.log('book:', bookInfo);
};
   
    

    const makeStore = () => {
    const bookInfo = book.getBook();
    let domstring = `<h3>Our Only Book:</h3>`;
    domstring += `<h3>${bookInfo.price}</h3>`;
   
    domstring += `<img class="book-cover" src=${bookInfo.image} alt="book cover">`;
    domstring += ` <button id="cart-button" class= "btn btn-danger">Add to cart</button>`;
    util.printToDom('store-container', domstring);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

export default { makeStore };