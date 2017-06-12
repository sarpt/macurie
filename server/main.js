const http = require('http');
const app = require('./server.js');
const models = require('./models');

const port = parseInt(process.env.PORT, 10) || 8800;
app.set('port', port);

const server = http.createServer(app);
models.sequelize.sync().then(() => {
  server.listen(port);
  //  server.on('error', onError);
  //  server.on('listening', onListening);
});
