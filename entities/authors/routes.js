'use strict';

const expressRoute = require('express').Router();

expressRoute.get('/create', (req, resp) => {
  return resp.render('create-author', { title: 'Create author' });
});

expressRoute.get('/create/:id', (req, resp) => {
  return resp.render('create-author', { title: 'Create author' });
});

expressRoute.get('/update/:id', (req, resp) => {
  return resp.render('edit-author', { title: 'Update author' });
});

expressRoute.get('/update:id', (req, resp) => {
  return resp.render('edit-author', { title: 'Update author' });
});

expressRoute.get('/', (req, resp) => {
  return resp.render('query-authors', { title: 'Get authors', authors: [] });
});

module.exports = expressRoute;
