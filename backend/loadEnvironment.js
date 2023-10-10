require('dotenv').config({ path: `${__dirname}/../.env` });

const WEB_PORT = process.env.REACT_APP_WEB_PORT || 3000;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || 3001;

const MONGO_CLIENT = process.env.ATLAS_URI || '';
const mysqlDbName = process.env.MY_SQL_DB_NAME || '';
const mysqlCreds = {
  port: process.env.MY_SQL_PORT || 3306,
  host: process.env.MY_SQL_HOST || 'localhost',
  user: process.env.MY_SQL_USER || 'root',
  password: process.env.MY_SQL_PWD || '',
};

module.exports = {
  WEB_PORT,
  SERVER_PORT,
  MONGO_CLIENT,
  mysqlDbName,
  mysqlCreds,
};
