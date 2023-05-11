const mongose = require('mongoose');
const model = require('../model_name');

const userModel = mongose.model(model.USER, mongose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userToken: {
        type: String,
        required: false
    },
}, { timestamps: true }));

module.exports = { userModel }