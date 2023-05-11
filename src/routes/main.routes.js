const express = require('express');

const allRoutes = express.Router();

//userRoutes
allRoutes.use(
    "/authentication",
    require("./authentication.routes").authenticationRouter
);

module.exports = { allRoutes };