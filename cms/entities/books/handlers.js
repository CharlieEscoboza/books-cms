'use strict';

const { BooksModel } = require('../../../db/models'),
  entitiesReducer = require('../../../server/helpers/entities');

function getBooks(req, h) {
  return new Promise(function (resolve, reject) {
    BooksModel.find(function (error, books) {
      if (error) {
        reject(error);
      }

      resolve(h.view('./entities/query-books', { title: 'Books screen', books }, { layout: 'main' }));
    });
  });
}

function getBookById(page) {
  return function (req, h) {
    return new Promise(function (resolve, reject) {
      BooksModel.findById(req.params.id, function (error, book) {
        if (error) {
          reject(error);
        }

        const image = new Buffer(book.picture).toString('base64'); // Should move this to use gridfs https://www.npmjs.com/package/mongoose-gridfs
        book.picture = image;

        resolve(h.view(page, { title: book.name, book }, { layout: 'main' }));
      });
    });
  }
}

function createBook(req, h) {
  return h.view('./entities/create-book', { title: 'Create book' }, { layout: 'main' });
}

function saveBook(req) {
  const { name, edition, isbn, tags, review, picture } = req.payload;

  return BooksModel.create({ name, edition, ISBN: isbn, tags: tags.split(','), review, picture })
    .then(book => {
      return `Succesfully saved, book named ${book.name} under id ${book._id}`;
    });
}

function updateBook(req, h) {
  return new Promise(function (resolve, reject) {
    BooksModel.findByIdAndUpdate(req.params.id, entitiesReducer(req.payload), function (error) {
      if (error) {
        reject(error);
      }

      resolve(h.redirect(`/update/book/${req.params.id}/`));
    });
  });
}

module.exports.getBooks = getBooks;
module.exports.getBookById = getBookById;
module.exports.createBook = createBook;
module.exports.saveBook = saveBook;
module.exports.updateBook = updateBook;
