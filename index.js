const Hapi = require('hapi');
const mongoose = require('mongoose');
const Inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const Vision = require('vision');

const ROUTES = require('./server/routes');

const Pack = require('./package.json');

// GraphQL version
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const paintingSchema = require('./graphql/schema');

// Rest version
const Painting = require('./models/painting');

const PORT = 5000;
const HOST = 'localhost';

const server = Hapi.server({
  port: PORT,
  host: HOST
});

async function init() {
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      },
      route: {
        cors: true
      }
    }
  });

  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: paintingSchema
      },
      route: {
        cors: true
      }
    }
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: hapiSwagger,
      options: {
        info: {
          title: 'Librarian API Documentation',
          version: Pack.version
        }
      }
    }
  ]);

  await server.start();

  mongoose.connect('mongodb+srv://admin:Lacasadelsol25!@cluster0-xmfxf.mongodb.net/test?retryWrites=true');
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });


  server.route(ROUTES);
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './cms/views',
    layout: true,
    layoutPath: './cms/views/layouts'
  });

  console.log(`App is running on http://${HOST}:${PORT}`);
}

init();
