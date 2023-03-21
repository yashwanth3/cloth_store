var mongoose = require('mongoose');

//for different store locations
var productDetailsSchema = new mongoose.Schema({
    sizeAvailable: [String],
    colorAvailable: [String]
});


//main document for products details
var homeSchema = new mongoose.Schema({
    
    
    
    productName: {
    	type: String,
	required: true
    },
    productBrand: {
    	type: String,
	required: true
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    discount: {
        type: Number,
        min: 0,
        max: 100
    },
    discountEndDate: {
        type: Date,
        "default": Date.now
    },
    productImage: {
	type: String,
	required: true
    },
    description: {
    type: String,
    required: true
    },
    price: 
    {
    	type: Number,
	required: true
    },
    productQuantity: 
    {
    	type: Number,
	required: true
    },
    productDetails: productDetailsSchema
});


var loginSchema = new mongoose.Schema({
    userName: {
    	type: String,
	required: true
    },
    password: {
    	type: String,
	required: true
    }
});

mongoose.model('clothes', homeSchema);
mongoose.model('logins', loginSchema);



