'use strict';

const router = require('express').Router();

router.get('/create', (req, resp) => {
  return resp.render('create-editorial', {title: 'Create editorial'});
});

router.post('/create/:id', (req, resp) => {
  return resp.render('create-editorial', {title: 'Create editorial'});
});

router.get('/update/:id', (req, resp) => {
  return resp.render('create-editorial', {title: 'Create editorial'});
});

router.post('/update/:id', (req, resp) => {
  return resp.render('create-editorial', {title: 'Create editorial'});
});

router.get('/:id', (req, resp) => {
  return resp.render('query-editorial', {title: 'Get editorial'});
});

router.get('/', (req, resp) => {
  return resp.render('query-editorials', {title: 'Get editorials'});
});

module.exports = router;

// [
//   {
//     method: 'GET',
//     path: '/editorials',
//     config: {
//       description: 'Give all editorials',
//       tags: ['library', 'api', 'editorials']
//     },
//     handler: getEditorials
//   },
//   {
//     method: 'GET',
//     path: '/editorial/{id}',
//     config: {
//       description: 'Give an especified editorial',
//       tags: ['library', 'api', 'editorial']
//     },
//     handler: getEditorialById('./entities/query-editorial')
//   },
//   {
//     method: 'GET',
//     path: '/create/editorial/',
//     config: {
//       description: 'Give a page to create editorials',
//       tags: ['library', 'api', 'editorials', 'creation']
//     },
//     handler: createEditorial
//   },
//   {
//     method: 'POST',
//     path: '/create/editorial/',
//     config: {
//       description: 'Save a new editorial',
//       tags: ['library', 'api', 'editorial', 'creation']
//     },
//     handler: saveEditorial
//   },
//   {
//     method: 'GET',
//     path: '/update/editorial/{id}/',
//     config: {
//       description: 'Update an existent editorial',
//       tags: ['library', 'api', 'editorial', 'update']
//     },
//     handler: getEditorialById('./entities/edit-editorial')
//   },
//   {
//     method: 'POST',
//     path: '/update/editorial/{id}/',
//     config: {
//       description: 'Update an existent editorial',
//       tags: ['library', 'api', 'editorial', 'update']
//     },
//     handler: updateEditorial
//   }
// ];
