'use strict';

const mongoose = require('mongoose'),
  BookSchema = new mongoose.Schema({
    name: String,
    edition: String,
    ISBN: String,
    picture: Buffer,
    tags: [String],
    review: Number
  });

module.exports = mongoose.model('Book', BookSchema);
