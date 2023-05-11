const mongoose =
    require("mongoose");
const { CONFIG } = require('./config');

const connection = async() => {
    try {
        await mongoose.connect(
            CONFIG.dbUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Database Connected");


    } catch (error) {
        console.log("Database Connectivity Error", error);
        throw new Error(error);
    }
};

module.exports = { connection };