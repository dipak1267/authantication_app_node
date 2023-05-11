const express = require('express');

const { handleUserSingUp, handleUserSingIn } = require('../controller/authentication.js');
const {
    userRegistrationSchema,
    userLoginSchema
} = require('../schema/authentication');

const { validateBody } = require('../validation/joiSchemaValidation');


const authenticationRouter = express.Router();

authenticationRouter.post('/register', validateBody(userRegistrationSchema), handleUserSingUp);
authenticationRouter.post('/login', validateBody(userLoginSchema), handleUserSingIn);

module.exports = { authenticationRouter };