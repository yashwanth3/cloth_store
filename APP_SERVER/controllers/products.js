//array for products and brands
const productArray = new Array( {name: "iPhone 13 Pro", type: "Apple"}, {name: "Google Pixel 6", type: "Google"}, {name: "Samsung Galaxy S21", type: "Samsung"} );


//controller 2 : products
module.exports.products = function(req, res) {
res.render('list-display', { product: productArray});
};

