const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async ()=>{
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Authorization', 'Content-Type'],
        additionalHeaders: ['Access-Control-Allow-Origin'],
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server running: ${server.info.uri}`);
};

init();