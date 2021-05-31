const Pool = require('pg').Pool;
require("dotenv").config();

// local settings
const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
};

// connect to heroku addon
const proConfig = {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;