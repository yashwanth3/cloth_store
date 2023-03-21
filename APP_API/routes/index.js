var express = require('express');
var router = express.Router();

var ctrlproducts = require('../controllers/clothes');   

/* Controllers for Mobiles file */
router.get('/products/list', ctrlproducts.productsList);
router.post('/products', ctrlproducts.productsCreate);
router.get('/products/:productid', ctrlproducts.productsReadOne);
router.put('/products/:productid', ctrlproducts.productsUpdateOne);
router.delete('/products/:productid', ctrlproducts.productsDeleteOne);
router.get('/dashboard/list', ctrlproducts.dashboard);
router.get('/admin/products/:productid', ctrlproducts.productsReadOneAdmin);
router.get('/login', ctrlproducts.loginList);



module.exports = router;



