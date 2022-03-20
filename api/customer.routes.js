const express = require('express');
const customerRoute = express.Router();

let Customer = require('./customer.model');

//store data

customerRoute.route('/add').post(function(req,res){

let customer = new Customer(req.body);
console.log(customer);
customer.save()
.then(customer=>{
    res.status(200).json({'customer':'customer added successfully'});
}).catch(err=>{
    req.status(400).send("save fail");
})
});

module.exports=customerRoute;