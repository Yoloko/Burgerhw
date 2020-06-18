const express = require("express")


//setting the port of the application
//process.env.port lets the port be set by heroku
const PORT = process.env.port || 9111

app.use(express.static("public"));
//
const app = express();

// setting up express app to handle data parsing

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var router = require("./controllers/burgercontroller")

app.use(routes);







app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);

});