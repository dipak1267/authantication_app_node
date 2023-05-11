const standard = require('../basic');

const ViewMap = (data) => {
    let dataView = getAuthenticationDataView(data);
    return dataView;
}

const ViewListMap = (data) => {
    if (!data.length) return null
    let viewData = data.map((item) => {
        return ViewMap(item);
    });
    return viewData;
}

module.exports = {
    ViewMap,
    ViewListMap,
    getAuthenticationDataView
}

function getAuthenticationDataView(data) {
    let { token, email, is_2fa_enabled, is_verified, first_name, last_name } = data;
    let dataView = standard.ViewMap(data);
    dataView.token = token;
    dataView.email = email;
    dataView.user_name = first_name && last_name ? `${first_name} ${last_name}` : undefined;
    dataView.is_2fa_enabled = is_2fa_enabled;
    dataView.is_verified = is_verified;
    return dataView;
}