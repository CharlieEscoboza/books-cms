'use strict';

const {
  createBook,
  getBooks,
  getBookById,
  saveBook,
  updateBook
} = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    config: {
      description: 'Give all books',
      tags: ['library', 'api', 'books']
    },
    handler: getBooks
  },
  {
    method: 'GET',
    path: '/book/{id}',
    config: {
      description: 'Give an especified book',
      tags: ['library', 'api', 'book']
    },
    handler: getBookById('./entities/query-book')
  },
  {
    method: 'GET',
    path: '/create/book/',
    config: {
      description: 'Give a page to create books',
      tags: ['library', 'api', 'books', 'creation']
    },
    handler: createBook
  },
  {
    method: 'POST',
    path: '/create/book/',
    config: {
      description: 'Save a new book',
      tags: ['library', 'api', 'book', 'creation']
    },
    handler: saveBook
  },
  {
    method: 'GET',
    path: '/update/book/{id}/',
    config: {
      description: 'Update an existent book',
      tags: ['library', 'api', 'book', 'update']
    },
    handler: getBookById('./entities/edit-book')
  },
  {
    method: 'POST',
    path: '/update/book/{id}/',
    config: {
      description: 'Update an existent book',
      tags: ['library', 'api', 'book', 'update']
    },
    handler: updateBook
  }
];
