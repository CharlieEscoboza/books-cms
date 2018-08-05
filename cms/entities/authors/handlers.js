'use strict';

const AuthorsModel = require('../../../db/models/authors'),
  entitiesReducer = require('../../../server/helpers/entities');

function getAuthors(req, h) {
  return new Promise(function (resolve, reject) {
    AuthorsModel.find(function (error, authors) {
      if (error) {
        reject(error);
      }

      resolve(h.view('./entities/query-authors', { title: 'Authors screen', authors }, { layout: 'main' }));
    });
  });
}

function getAuthorById(page) {
  return function (req, h) {
    return new Promise(function (resolve, reject) {
      AuthorsModel.findById(req.params.id, function (error, author) {
        if (error) {
          reject(error);
        }

        resolve(h.view(page, { title: author.name, author }, { layout: 'main' }));
      });
    });
  }
}

function createAuthor(req, h) {
  return h.view('./entities/create-author', { title: 'Create author' }, { layout: 'main' });
}

function saveAuthor(req, h) {
  const { name, address, phone } = req.payload;

  return AuthorsModel.create({ name, address, phoneNumber: phone })
    .then(author => {
      return `Succesfully saved, author named ${author.name} under id ${author._id}`;
    });
}

function updateAuthor(req, h) {
  return new Promise(function (resolve, reject) {
    AuthorsModel.findByIdAndUpdate(req.params.id, entitiesReducer(req.payload), function (error) {
      if (error) {
        reject(error);
      }

      resolve(h.redirect(`/update/author/${req.params.id}/`));
    });
  });
}

module.exports.getAuthors = getAuthors;
module.exports.getAuthorById = getAuthorById;
module.exports.createAuthor = createAuthor;
module.exports.saveAuthor = saveAuthor;
module.exports.updateAuthor = updateAuthor;
