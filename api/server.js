const express= require('express');
const app =express();
const bodeParser = require('body-parser');
const PORT =4000;
const cors = require('cors');
const mongoose= require('mongoose');
const config= require('./DB');
const CustomerRoute = require('./customer.routes');
mongoose.Promise=global.Promise;

mongoose.connect(config.DB).then(
()=>{console.log("db connected")},
err=>{console.log('error occur' +err)}
);

app.use(cors());
app.use(bodeParser.urlencoded({extended:true}));
app.use(bodeParser.json());
app.use('/customer',CustomerRoute);

app.listen(PORT,function(){
    console.log('server is runnig on port :',PORT);
})