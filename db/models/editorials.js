'use strict';

const mongoose = require('mongoose'),
  EditorialSchema = new mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String
  });

module.exports = mongoose.model('Editorial', EditorialSchema);
