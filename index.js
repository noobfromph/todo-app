'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3005;
const app = express();

// JSON body parsing middleware
app.use(express.json());

// allowing specific origins
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
app.use(cors({ origin: allowedOrigins }));

// pino logger middleware 
const logger = require('./utils/logger').child({name: 'app'});

// inject the routes
app.use('/api', require('./routes'));

// db connection
require('./models');

app.listen(PORT, () => {
    logger.info('Express server listening on port ' + PORT);
});

module.exports = app;