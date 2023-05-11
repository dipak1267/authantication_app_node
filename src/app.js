const express = require('express');
const dbConnection = require('./configs/db');
const { CONFIG } = require('./configs/config');
const { errors } = require('./constant/status/client_errors');

const app = express();

dbConnection.connection();

app.listen(CONFIG.port, () => {
    console.log(`server is listening on http://localhost:${CONFIG.port}`);
});

app.use(express.json());

//routes and endpoints
app.use('/api', require('./routes/main.routes').allRoutes);

app.use((err, req, res, next) => {
    logger.get('server_log').error({
        level: "error",
        message: err.message,
        metadata: err.stack,
    });
    res.status(res.statusCode).send(`Something broke :( on ${CONFIG.port}`);
});

// default route of express app for heroku monitoring
app.get("/", (req, res) => {
    res.send("MONITORING......");
});

app.use('*', (req, res, next) => {
    res.status(errors.Not_Found.code).json({
        status: errors.Not_Found.code,
        message: `Can't find ${req.originalUrl} on this server!`
    });
});