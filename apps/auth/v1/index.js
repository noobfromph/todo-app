'use strict';

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const authenticateUser = require('../../../middlewares/auth');

const controller = require('./controller');

// schema for adding or updating todo
const signInSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    nonce: Joi.string().required()
});

// routes for todo
function routes() {
    router.post('/nonces', controller.generateNonce());
    router.post('/signin', validator.body(signInSchema), controller.signIn());
    router.post('/signout', authenticateUser, controller.signOut());
    return router;
}

module.exports = routes;