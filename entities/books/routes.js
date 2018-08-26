'use strict';

const expressRoute = require('express').Router();

expressRoute.get('/create', (req, resp) => {
  return resp.render('create-book', { title: 'Create book' });
});

expressRoute.get('/create/:id', (req, resp) => {
  return resp.render('create-book', { title: 'Create book' });
});

expressRoute.get('/update/:id', (req, resp) => {
  return resp.render('edit-book', { title: 'Update book' });
});

expressRoute.get('/update:id', (req, resp) => {
  return resp.render('edit-book', { title: 'Update book' });
});

expressRoute.get('/', (req, resp) => {
  return resp.render('query-books', { title: 'Get books', books: [] });
});

module.exports = expressRoute;
