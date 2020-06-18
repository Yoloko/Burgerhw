var mysql = require ("mysql");

// setting up yout heroku site with jawsSB using sequel 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers"
    });
};

module.exports = connection;

//add a new burger




