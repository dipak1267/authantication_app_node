const Joi = require('joi');
const { userLabels } = require('../constant/labels_message/user/user_label');

const userRegistrationSchema = Joi.object({
    email: Joi.string().email().required().label(userLabels['email']).required(),
    name: Joi.string().required().label(userLabels['name']).required(),
    password: Joi.string().label(userLabels['password']).required(),
});

const userLoginSchema = Joi.object({
    email: Joi.string().email().required().label(userLabels['email']).required(),
    password: Joi.string().label(userLabels['password']).required(),
});

module.exports = { userRegistrationSchema, userLoginSchema }