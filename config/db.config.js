const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "blog_with_rest_api"
});

dbConn.connect( (err) => {
    if (err) {
        console.log("Error occurred while connecting the database.");
        throw err;
    }
    console.log("Database connected successfully");
});

module.exports = dbConn;