const { userModel } = require('../../models/data/user_model');
const authentication_view = require('../../models/view/security/authentication');
const bcrypt_service = require('./bcrypt_service');
const { getJwtToken } = require('./jwt_service');

const register = async(register) => {
    try {
        if (register) {
            const email = register.email;
            const name = register.name;
            let userExist = await userModel.findOne({ email });
            if (userExist) {
                throw (JSON.stringify({ status: 511, messages: `Email has been already exists.` }))
            }
            let newPassword = await bcrypt_service.getHashedData(register.password, 12);
            let newUser = new userModel({ email, password: newPassword, name: name });
            let result = await newUser.save();
            const token = await getJwtToken(result._id, result.email);
            return authentication_view.ViewMap({ _id: result._id, email: result.email, token });
        }
    } catch (error) {
        throw (error);
    }
}

const login = async(register) => {
    try {
        if (register) {
            const email = register.email;
            const name = register.name;
            let userExist = await userModel.findOne({ email });
            if (!userExist) {
                throw (JSON.stringify({ status: 511, messages: `Email not exists.` }))
            }
            let newPassword = await bcrypt_service.getHashedData(register.password, 12);
            let newUser = new userModel({ email, password: newPassword, name: name });
            let result = await newUser.save();
            const token = await getJwtToken(result._id, result.email);
            return authentication_view.ViewMap({ _id: result._id, email: result.email, token });
        }
    } catch (error) {
        throw (error);
    }
}

module.exports = {
    register,
    login
};