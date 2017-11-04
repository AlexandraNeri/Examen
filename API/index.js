
const express= require ("express");
const port =8000;
const bodyParser = require('body-parser');
let app =express();

let productRoutes =require("./routes/products");
let db = require("./config/db");

//app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(port, function(err, res){
    if(err){
        console.log(err);
        return;
    }else{
        console.log(`Listenning on ${port}`);
    }
})