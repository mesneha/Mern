const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  productname: {
    type: String
  },
  price: {
      type: Number
  }
},{
    collection: 'product'
});

module.exports = mongoose.model('ServerPort', ServerPort);