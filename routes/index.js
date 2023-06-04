'use strict';

const express = require('express');
const routes = express.Router();

const authenticateUser = require('../middlewares/auth');

// v1 apis
const todo = require("../apps/todo/v1");
routes.use('/v1/todos', authenticateUser, todo());

const auth = require('../apps/auth/v1');
routes.use('/v1/auth', auth());
//end: v1 apis

module.exports = routes;