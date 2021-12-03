const mysql = require("mysql");
const db = mysql.createConnection({
    host: "login.cdsaix0ebfwq.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "loginlogin",
    database: "login",
});

db.connect();

module.exports = db;