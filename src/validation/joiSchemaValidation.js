const { requestValidationMessage } = require('../constant/common/validation_message');
const { defaultServerResponse } = require('../constant/common/response');
const { errors } = require('../constant/status/client_errors');

const validateObjectSchema = (data, schema) => {
    const validation = schema.validate(data, { abortEarly: false });
    if (validation.error) {
        const errorDetails = validation.error.details.map((value) => {
            return {
                error: value.message,
                path: value.path,
            };
        });
        return errorDetails;
    }
    return null;
};

const validateBody = (schema) => {
    return (req, res, next) => {
        let response = defaultServerResponse;
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            response.body = error;
            response.message = requestValidationMessage.REQUEST_PAYLOAD_ERROR;
            response.status = errors.Bad_Request.code;
            return res.status(response.status).send(response);
        }
        return next();
    };
};


module.exports = {
    validateBody
}