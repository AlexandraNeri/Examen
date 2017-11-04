const route = require('express').Router();
const Product = require('../models/Product');

route.get('/',function(req,res){
    //res.status(200).send('Hola Mundo');
    Product.find({},function(err,product){
        if(err){
            console.log(err);
            return;
        }
res.status(200).send(product);
    });

    
});

route.post('/',function(req,res){
    let product = new Product({
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Precio: req.body.Precio,
        Localiza: req.body.Localiza,
        Imagen: req.body.Imagen
        

    });
    product.save(function(err,Product){
        
        res.status(202).send(Product);
    
    });

});


route.put('/:id',function(req,res){
    Product.findByIdAndUpdate(req.params.id,{
       Nombre: req.body.Nombre,
       Descripcion: req.body.Descripcion,
       Precio: req.body.Precio,
       Localiza: req.body.Localiza,
       Imagen: req.body.Imagen
       
    },
function(err, product){
    if(err)
    return
    returnres.status(200).send('register updated sucessfully');
})

});

route.delete('/:id',function(req,res){
  Product.findByIdAndRemove(req.param.id,function(err,product){
      if(err)
        return;
        res.status(200).send(product);
  });
});

//un producto en especifico

route.get('/:id',function(req,res){
 Product.findById(req.params.id,function(err,product){
     if(err)
        return
        res.status(200).send(product)

 })   ;
});


module.exports = route;