const serverErrors = {
    Internal_Server_Error: {
        code: 500,
        message: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'
    },
    Not_Implemented: {
        code: 501,
        message: 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability . '
    },
    Bad_Gateway: {
        code: 502,
        message: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
    },
    Service_Unavailable: {
        code: 503,
        message: 'The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state. '
    },
    Gateway_Timeout: {
        code: 504,
        message: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server. '
    },
    HTTP_Version_Not_Supported: {
        code: 505,
        message: 'The server does not support the HTTP protocol version used in the request. '
    },
    Variant_Also_Negotiates: {
        code: 506,
        message: 'Transparent content negotiation for the request results in a circular reference. '
    },
    Insufficient_Storage: {
        code: 507,
        message: 'The server is unable to store the representation needed to complete the request. '
    },
    Loop_Detected: {
        code: 508,
        message: 'The server detected an infinite loop while processing the request (sent instead of 208 Already Reported). '
    },
    Not_Extended: {
        code: 510,
        message: 'Further extensions to the request are required for the server to fulfil it. '
    },
    Network_Authentication_Required: {
        code: 511,
        message: 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network. '
    },
}
module.exports = {
    serverErrors
}