var app = require('../index');
// var mydb = app.get('db');
module.exports = {
  createProduct: function(product) {
    let mydb = app.get('db');
    let defer = new Promise(function(resolve, reject){
      mydb.create_product([product.name, product.description, parseInt(product.price), product.imageUrl], function(err, result){
        console.log(err, result);
        if (err) {
          reject ('Ah..oh..Got an Error');
        } else {
          resolve (result);
        }
      });
    });
    return defer;
  },
  getProduct: function(id) {
    let mydb = app.get('db');
    let defer = new Promise(function(resolve, reject){
    mydb.read_product([id], function(err, result){
      console.log(err, result);
      if (err) {
        reject ('Ah..oh..Got an Error');
      } else {
        resolve (result);
      }
    });
    });
    return defer;
  },
  getAllProducts: function() {
    let mydb = app.get('db');
    let defer = new Promise(function(resolve, reject) {
      mydb.read_products(function(err, result){
        console.log(err, result);
        if (err) {
          reject ('Ah..oh..Got an Error');
        } else {
          resolve (result);
        }
      });
    });
    return defer;
  },
  updateProduct: function(id, description) {
    let mydb = app.get('db');
    let defer = new Promise(function(resolve, reject){
      mydb.update_product([id, description],function(err, result){
        console.log(err, result);
        if (err) {
          reject ('Ah..oh..Got an Error');
        } else {
          resolve (result);
        }
      });
    });
    return defer;
  },
  deleteProduct: function(id) {
    let mydb = app.get('db');
    let defer = new Promise(function(resolve, reject){
      mydb.delete_product([id], function(err, result){
        console.log(err, result);
        if (err) {
          reject ('Ah..oh..Got an Error');
        } else {
          resolve (result);
        }
      });
    });
    return defer;
  }
};
