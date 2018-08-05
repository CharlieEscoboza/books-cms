'use strict';

const entitiesReducer = require('../../../server/helpers/entities');

function getEditorials(req, h) {
  return new Promise(function (resolve, reject) {
    EditorialsModel.find(function (error, editorials) {
      if (error) {
        reject(error);
      }

      resolve(h.view('./entities/query-editorials', { title: 'Editorials screen', editorials }, { layout: 'main' }));
    });
  });
}

function getEditorialById(page) {
  return function (req, h) {
    return new Promise(function (resolve, reject) {
      EditorialsModel.findById(req.params.id, function (error, editorial) {
        if (error) {
          reject(error);
        }

        resolve(h.view(page, { title: editorial.name, editorial }, { layout: 'main' }));
      });
    });
  }
}

function createEditorial(req, h) {
  return h.view('./entities/create-editorial', { title: 'Create editorial' }, { layout: 'main' });
}

function saveEditorial(req, h) {
  const { name, address, phone } = req.payload;

  return EditorialsModel.create({ name, address, phoneNumber: phone })
    .then(editorial => {
      return `Succesfully saved, editorial named ${editorial.name} under id ${editorial._id}`;
    });
}

function updateEditorial(req, h) {
  return new Promise(function (resolve, reject) {
    EditorialsModel.findByIdAndUpdate(req.params.id, entitiesReducer(req.payload), function (error) {
      if (error) {
        reject(error);
      }

      resolve(h.redirect(`/update/editorial/${req.params.id}/`));
    });
  });
}

module.exports.getEditorials = getEditorials;
module.exports.getEditorialById = getEditorialById;
module.exports.createEditorial = createEditorial;
module.exports.saveEditorial = saveEditorial;
module.exports.updateEditorial = updateEditorial;
