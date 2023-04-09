require('dotenv').config();

module.exports = {
  "LOCAL": {
    "username":process.env.DATABASE_USERNAME,
    "password":process.env.DATABASE_PASSWORD,
    "database":process.env.DATABASE,
    "dialect":"mysql",
    "host":process.env.DATABASE_HOST, 
    "port":parseInt(process.env.DATABASE_PORT)
  }
}