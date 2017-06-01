import http = require('http');
import {app} from './server';

const port = parseInt(process.env.PORT, 10) || 8800;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);