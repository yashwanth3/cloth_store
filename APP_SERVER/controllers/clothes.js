
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderCreatePage = function(req, res){
    res.render('create', {
              title: "Create New Product"
              });
};

const addNewProduct = function(req, res) {
    _renderCreatePage(req, res);
};

//adding new product to database using post method
const doAddNewProduct = function(req, res) {
    console.log(req.body)
    
    const path = '/api/products';
    const postdata = {
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        rating: req.body.rating,
        discount: req.body.discount,
        discountEndDate: req.body.discountEndDate,
        productImage: "/images/" + req.body.productImage,
        description: req.body.description,
        price: req.body.price,
        productQuantity: req.body.productQuantity,
        sizeAvailable: req.body.sizeAvailable,
        colorAvailable: req.body.colorAvailable
    };

    

    
    
    //postdata.availableAt.push({storeAddress: req.body.storeAddress})
    //console.log(postdata)
    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
    requestOptions,
    (err, response, body) => {
        if (response.statusCode === 201) {
            res.redirect('/dashboard/list/');
        }
    }
    );
};

//Displaying list of product from database using get method
const productlist = function (req, res) {
    const path = '/api/products/list';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {} 
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
};

const _renderHomepage = function (req, res, responseBody) {
    
    res.render('list-display', {
        products: responseBody
    });
};


//Get login details for validation
const loginlist = function (req, res) {
    const path = '/api/login';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {} 
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderLoginpage(req, res, body);
        }
    );
};

const _renderLoginpage = function (req, res, responseBody) {
    
    res.render('login', {
        userAdmin: responseBody
    });
};

//admin dashboard
//Displaying list of product from database using get method
const admindashboard = function (req, res) {
    const path = '/api/dashboard/list';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {} 
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDashboard(req, res, body);
        }
    );
};

const _renderDashboard = function (req, res, responseBody) {
    
    res.render('dashboard', {
        products: responseBody
    });
};



const _renderDetailPage = function (req, res, responseBody){
    res.render('single-product', {
        currentProduct: responseBody
    });
};

//displaying product detials from database using get method
const productInfo = function (req, res) {
    const path = `/api/products/${req.params.productid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
    requestOptions,
    (err, response, body) => {
        _renderDetailPage(req, res, body);
    });
};


//admin product details
const _renderDetailPageAdmin = function (req, res, responseBody){
    res.render('single-product-admin', {
        currentProduct: responseBody
    });
};

//displaying product detials from database using get method
const productInfoadmin = function (req, res) {
    const path = `/api/admin/products/${req.params.productid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
    requestOptions,
    (err, response, body) => {
        _renderDetailPageAdmin(req, res, body);
    });
};

//deleting product from database using delete method
const productsDeleteOne = function (req, res) {
  const path = '/api/products/' + req.params.productid;
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'DELETE',
    json: {}
  };
  request(
    requestOptions,
    (err,response,body) => {
        res.redirect('/dashboard/list/');     
    }
  );
};

//updating product from database using get method to get data and the put method to update the data
const _renderUpdatepage = function (req, res, responseBody) {
  res.render('update', {
    title:"Update Mobile",
    currentProduct:responseBody
  });
};

updateMobile = function (req, res) {
  const path = `/api/products/${req.params.productid}`; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
        console.log("Body---",body)
      _renderUpdatepage(req, res, body);
    }
  );
};

doUpdateNewMobile = function(req,res){
  const path='/api/products/' + req.params.productid; 
  const postdata = {
    productName: req.body.productName,
    productBrand: req.body.productBrand,
    rating: req.body.rating,
    discount: req.body.discount,
    discountEndDate: req.body.discountEndDate,
    productImage: "/images/" + req.body.productImage,
    description: req.body.description,
    price: req.body.price,
    productQuantity: req.body.productQuantity,
    sizeAvailable: req.body.sizeAvailable,
    colorAvailable: req.body.colorAvailable
  };
  const requestOptions ={
    url: apiOptions.server+path,
    method:'PUT',
    json:postdata
  };
  request(
    requestOptions,
    (err,response,body) => {
      res.redirect('/dashboard/list/');
    }
  );
};

module.exports = {
    productlist,
    productInfo,
    addNewProduct,
    doAddNewProduct,
    productsDeleteOne,
    doUpdateNewMobile,
    updateMobile,
    admindashboard,
    productInfoadmin,
    loginlist
};