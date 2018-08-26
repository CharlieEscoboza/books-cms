'use strict';

const expressRoute = require('express').Router();

expressRoute.get('/create', (req, resp) => {
  return resp.render('create-editorial', { title: 'Create editorial' });
});

expressRoute.get('/create/:id', (req, resp) => {
  return resp.render('create-editorial', { title: 'Create editorial' });
});

expressRoute.get('/update/:id', (req, resp) => {
  return resp.render('edit-editorial', { title: 'Update editorial' });
});

expressRoute.get('/update:id', (req, resp) => {
  return resp.render('edit-editorial', { title: 'Update editorial' });
});

expressRoute.get('/', (req, resp) => {
  return resp.render('query-editorials', { title: 'Get editorials', editorials: [] });
});

module.exports = expressRoute;
