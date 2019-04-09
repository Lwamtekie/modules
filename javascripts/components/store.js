import book from '../helpers/book.js'
import util from '../helpers/util.js'

const makeStore = () => {
    const bookInfo = book.getBook();
    let domstring = `<h3>Our Only Book:</h3>`
    domstring += `<h3>${bookInfo.price}</h3>`
    domstring += `<img src=${bookInfo.image} alt=book cover>`
    domstring += ` <button class= "btn btn-danger">Add to cart</button>`
    util.printToDom('store-container', domstring);
};

export default {makeStore};