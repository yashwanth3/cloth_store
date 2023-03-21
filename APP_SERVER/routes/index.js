var express = require('express');
var router = express.Router();

//const ctrlProducts= require('../controllers/products');


const ctrlLogin= require('../controllers/clothes');
const ctrlAbout= require('../controllers/about');
const ctrlMain = require('../controllers/main');
const ctrlProducts = require('../controllers/clothes');
const ctrlPayment= require('../controllers/payment');


//route to get product list
router.get('/products/list/', ctrlProducts.productlist);



//route to get get product details
router.get('/products/:productid', ctrlProducts.productInfo);

//route to create new product
router.route('/new')
    .get(ctrlProducts.addNewProduct)
    .post(ctrlProducts.doAddNewProduct);

//route for deleting product
router.route('/delete/:productid')
    .get(ctrlProducts.productsDeleteOne);

//route to get data and update in database
router.route('/update/:productid')
    .get(ctrlProducts.updateMobile)
    .post(ctrlProducts.doUpdateNewMobile);


/* GET home page. */
router.get('/', ctrlMain.index);

/* GET about page. */
router.get('/about', ctrlAbout.about);

/* GET login page. */
router.get('/login', ctrlLogin.loginlist);

/* GET payment page. */
router.get('/payment', ctrlPayment.payment);


/* GET Admin Dashboard page. */
router.get('/dashboard/list/', ctrlProducts.admindashboard);


//route to get get product details for admin
router.get('/admin/products/:productid', ctrlProducts.productInfoadmin);

/* GET products page. 
router.get('/list', ctrlProducts.products);
*/

module.exports = router;
