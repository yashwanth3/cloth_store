var mongoose = require('mongoose');
var Clothes = mongoose.model('clothes');
var Login = mongoose.model('logins');


//Product listing
const productsList = function (req, res)
{
    Clothes.find().exec(function(err, clothesdata){
        if(err){
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(clothesdata);
    });
};

//dashboard listing
const dashboard = function (req, res)
{
    Clothes.find().exec(function(err, clothesdata){
        if(err){
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(clothesdata);
    });
};

//Login details
const loginList = function (req, res)
{
    Login.find().exec(function(err, logindata){
        if(err){
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(logindata);
    });
};


  
//Create product
const productsCreate = function (req, res)
{
    Clothes.create({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        rating: req.body.rating,
        discount: req.body.discount,
        discountEndDate: req.body.discountEndDate,
        productImage: req.body.productImage,
        description: req.body.description,
        price: req.body.price,
        productQuantity: req.body.productQuantity,
        productDetails: 
        {
            sizeAvailable: req.body.sizeAvailable,
            colorAvailable: req.body.colorAvailable
        }

    }, (err, clothesdata) =>{
        if(err){
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(clothesdata);
        }
    });
};

//Read Product details
const productsReadOne = function (req, res)
{if (req.params && req.params.productid) {
      Clothes
      .findById(req.params.productid)
      .exec((err, cloth) => {
        if (!cloth) {
            res
                .status(404)
                .json({"message": "clothsid not found"});
            return;
        } else if (err) {
            res
                .status(404)
                .json(err);
            return;
        } 
          res
              .status(200)
              .json(cloth);
      });
  } else {
      res
          .status(404)
          .json({"message": "No clothsid in request"});
  }
};

//Read Product details - admin
const productsReadOneAdmin = function (req, res)
{if (req.params && req.params.productid) {
      Clothes
      .findById(req.params.productid)
      .exec((err, cloth) => {
        if (!cloth) {
            res
                .status(404)
                .json({"message": "clothid not found"});
            return;
        } else if (err) {
            res
                .status(404)
                .json(err);
            return;
        } 
          res
              .status(200)
              .json(cloth);
      });
  } else {
      res
          .status(404)
          .json({"message": "No clothid in request"});
  }
};

//update product
const productsUpdateOne = function (req, res)
{
    if(!req.params.productid){
        res
        .status(404)
        .json({
            "message": "Not found, product id is required"
        });
    return;
    }
    Clothes.findById(req.params.productid).exec((err, clothesdata) => {
        if(!clothesdata){
            res
            .status(404)
            .json({"message": "product id not found"
            });
        return;
        } else if(err) {
            res
            .status(400)
            .json(err);
        return;
        }
        clothesdata.productName = req.body.productName;
        clothesdata.productBrand = req.body.productBrand;
        clothesdata.rating = req.body.rating;
        clothesdata.discount = req.body.discount;
        clothesdata.discountEndDate = req.body.discountEndDate;
        clothesdata.productImage = req.body.productImage;
        clothesdata.description= req.body.description;
        clothesdata.price = req.body.price;
        clothesdata.productQuantity = req.body.productQuantity;
        clothesdata.openingTime = req.body.openingTime;
        clothesdata.productDetails.sizeAvailable = req.body.sizeAvailable
        clothesdata.productDetails.colorAvailable = req.body.colorAvailable
        clothesdata.save((err, clothesdata) =>{
            if(err){
                res
                .status(404)
                .json(err);
            } else {
                res
                .status(200)
                .json(clothesdata);
            }
        });
    });
};

//delete product
const productsDeleteOne = function (req, res)
{
    const productid = req.params.productid;
    if(productid){
        Clothes
        .findByIdAndRemove(productid)
        .exec((err, clothesdata) => {
            if(err){
                res.status(404)
                .json(err);
            return;
            }
        res
        .status(204)
            .json(null);
        });
    } else {
        res
        .status(404)
        .json({"message" : "No product id"});
    }
};


module.exports = {
	productsList,
	productsCreate,
	productsReadOne,
	productsUpdateOne,
	productsDeleteOne,
    dashboard,
    productsReadOneAdmin,
    loginList

};
