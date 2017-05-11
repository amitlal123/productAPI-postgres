// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
// Express
var app = module.exports = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Postgres connection
var password = require('./config').password;
var connectionString = `postgres://postgres:${password}@localhost/sandbox`;
var massiveInstance = massive.connectSync({connectionString : connectionString});
// Set Express to use Massive DB Instance
app.set('db', massiveInstance);
// Import Controller
var productsCtrl = require('./controllers/productsCtrl');
// Start Server
const port = 8889;
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
// Endpoints
// Need to use Promise as Javascript is async. It will move on to next step before you get the results back from database
app.get('/api/products', function(req, res, next){
  productsCtrl.getAllProducts().then(function(response){
    if(response === 'Ah..oh..Got an Error') {
      res.send(response);
    } else {
      res.json(response);
    }
  });
});

app.get('/api/products/:productId', function(req, res, next){
  let productId = req.params.productId;
  console.log('getProductId', productId);
  productsCtrl.getProduct(productId).then(function(response){
    if(response === 'Ah..oh..Got an Error') {
      res.send(response);
    } else {
      res.json(response);
    }
  });
});

app.post('/api/products', function(req, res, next){
  let product = req.body;
  console.log('createProductBody', product);
  productsCtrl.createProduct(product).then(function(response){
  if(response === 'Ah..oh..Got an Error') {
    res.send(response);
  } else {
    res.json(response);
  }
  });
});

app.put('/api/products/:productId', function(req, res, next){
  let productId = req.params.productId;
  let description = req.query.desc;
  console.log('updateProductId', productId);
  console.log('updateProductDesc', description);
  productsCtrl.updateProduct(productId, description).then(function(response){
    if(response === 'Ah..oh..Got an Error') {
      res.send(response);
    } else {
      res.json(response);
    }
  });
});

app.delete('/api/products/:productId', function(req, res, next){
  let productId = req.params.productId;
  console.log('deleteProductId', productId);
  productsCtrl.deleteProduct(productId).then(function(response){
    if(response === 'Ah..oh..Got an Error') {
      res.send(response);
    } else {
      res.json(response);
    }
  });
});
