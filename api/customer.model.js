const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    name:{
        type:String
    },
 
    nic:{
        type:String
    }
},{
    collation:"customer"
}
);
module.exports=mongoose.model('Customer',Customer);