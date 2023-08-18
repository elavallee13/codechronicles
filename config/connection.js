const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        database: 'codechronicles',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
}

module.exports = sequelize;
