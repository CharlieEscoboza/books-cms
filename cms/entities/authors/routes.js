'use strict';

const {
  createAuthor,
  getAuthors,
  getAuthorById,
  saveAuthor,
  updateAuthor
} = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/authors',
    config: {
      description: 'Give all authors',
      tags: ['library', 'api', 'authors']
    },
    handler: getAuthors
  },
  {
    method: 'GET',
    path: '/author/{id}',
    config: {
      description: 'Give an especified author',
      tags: ['library', 'api', 'author']
    },
    handler: getAuthorById('./entities/query-author')
  },
  {
    method: 'GET',
    path: '/create/author/',
    config: {
      description: 'Give a page to create authors',
      tags: ['library', 'api', 'authors', 'creation']
    },
    handler: createAuthor
  },
  {
    method: 'POST',
    path: '/create/author/',
    config: {
      description: 'Save a new author',
      tags: ['library', 'api', 'author', 'creation']
    },
    handler: saveAuthor
  },
  {
    method: 'GET',
    path: '/update/author/{id}/',
    config: {
      description: 'Update an existent author',
      tags: ['library', 'api', 'author', 'update']
    },
    handler: getAuthorById('./entities/edit-author')
  },
  {
    method: 'POST',
    path: '/update/author/{id}/',
    config: {
      description: 'Update an existent author',
      tags: ['library', 'api', 'author', 'update']
    },
    handler: updateAuthor
  },
];
