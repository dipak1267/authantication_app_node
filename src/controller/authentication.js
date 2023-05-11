const { defaultServerResponse } = require('../constant/common/response');
const { success } = require('../constant/status/success');
const authentication_service = require('../services/security/authentication_service');



async function handleUserSingUp(
    request,
    response,
) {

    try {
        let newResponse = {...defaultServerResponse };
        try {

            const registeredUser = await authentication_service.register(request.body);
            newResponse.status = success.Created.code;
            newResponse.message = `${success.Created.message} user created.`;
            newResponse.body = registeredUser;
        } catch (error) {
            newResponse.status = JSON.parse(error)['status'];
            newResponse.message = JSON.parse(error)['messages'];
            newResponse.body = undefined;
        }
        response.status(newResponse.status).send(newResponse);;
        // return res.send(req.body);
    } catch (err) {
        console.log(err);
    }

}

async function handleUserSingIn(
    request,
    response,
) {

    try {
        let newResponse = {...defaultServerResponse };
        try {

            const registeredUser = await authentication_service.login(request.body);
            newResponse.status = success.Created.code;
            newResponse.message = `${success.Created.message}`;
            newResponse.body = registeredUser;
        } catch (error) {
            newResponse.status = JSON.parse(error)['status'];
            newResponse.message = JSON.parse(error)['messages'];
            newResponse.body = undefined;
        }
        response.status(newResponse.status).send(newResponse);;
        // return res.send(req.body);
    } catch (err) {
        console.log(err);
    }

}

module.exports = { handleUserSingUp, handleUserSingIn };