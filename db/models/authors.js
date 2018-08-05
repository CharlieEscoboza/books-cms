'use strict';

const mongoose = require('mongoose'),
  AuthorsSchema = new mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String
  });
  
module.exports = mongoose.model('Author', AuthorsSchema);
