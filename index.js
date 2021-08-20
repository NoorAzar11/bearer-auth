'use strict';

require('dotenv').config();
const { db } = require('./auth/models/index');
const server = require('./server')
const port = process.env.PORT||8001;
db.sync().then(() => {  
    server.start(port);
  });
