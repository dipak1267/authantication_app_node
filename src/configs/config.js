let CONFIG = {};

CONFIG.dbUri = "mongodb://localhost:27017/bull_bread";

CONFIG.env = 'development';

CONFIG.dbName = 'bull_bread';

CONFIG.port = process.env.PORT || 3000;


module.exports = { CONFIG };