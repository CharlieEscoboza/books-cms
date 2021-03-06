'use strict';

const express = require('express'),
  expressHandlebars = require('express-handlebars'),
  app = express(),
  authorRoutes = require('./entities/authors/routes'),
  bookRoutes = require('./entities/books/routes'),
  editorialRoutes = require('./entities/editorials/routes'),
  PORT = process.env.PORT || 8080,
  HOST = process.env.HOST || 'localhost';


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
            { link: '/editorials/create', label: 'Editorial' },
            { link: '/authors/create', label: 'Author' },
            { link: '/books/create', label: 'Book' }]
        }
      ]]
  };

app.engine('.hbs', expressHandlebars.create({
  defaultLayout: 'main',
  extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/editorials', editorialRoutes);

app.get('/', (req, resp) => {
  resp.render('home', HP_DATA);
});

app.listen(PORT, () => console.log(`App running on http://${HOST}:${PORT}`)); /* eslint-disable-line no-console */
