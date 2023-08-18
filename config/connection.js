const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
}

module.exports = sequelize;
