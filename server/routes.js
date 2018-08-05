'use strict';

const authorsRoutes = require('../cms/entities/authors/routes'),
  booksRoutes = require('../cms/entities/books/routes'),
  editorialRoutes = require('../cms/entities/editorials/routes');

const HP_DATA = {
  title: 'The Librarian CMS',
  sections: [
    [
      {
        title: 'Query', links: [
          { link: '/editorials', label: 'Editorials' },
          { link: '/authors', label: 'Authors' },
          { link: '/books', label: 'Books' }]
      }
    ],
    [
      {
        title: 'Creation', links: [
          { link: '/create/editorial/', label: 'Editorial' },
          { link: '/create/author/', label: 'Author' },
          { link: '/create/book/', label: 'Book' }]
      }
    ]]
}

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      description: 'Renders the homepage',
      tags: ['library', 'api', 'homepage']
    },
    handler: (req, h) => {
      return h.view('./entities/index', HP_DATA, { layout: 'main' });
    }
  },
  ...authorsRoutes,
  ...booksRoutes,
  ...editorialRoutes
];
