const bcrypt = require('bcryptjs');

const getHashedData = async(data, rounds) => {
    try {
        //const salt = await bcrypt.genSalt(number)
        return await bcrypt.hash(data, rounds);
    } catch (error) {
        throw (error);
    }

}

const compareHashedData = async(nonHashed, hashed) => {
    try {
        return await bcrypt.compare(nonHashed, hashed);
    } catch (error) {
        throw (error);
    }

}

module.exports = {
    getHashedData,
    compareHashedData
};