var databaseUrl = "localhost/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(username, pwd, response) {
db.login.find({ "username": username,"password":pwd},
    function(err, login) 
    {
        if (err || !login) {
        response.write("Not authorized user");
        response.end();
            } 
        else if (login.length == 0) {
        response.write("Not authorized user");
        response.end();
            } 
        else {
        response.write("Authorized user");
        response.end();
            }
        });
}

exports.saveUser = function(username,pwd, email, response) {
console.log('Saving user to mongo');
db.login.insert({ "username": username,"password":pwd, "email": email },
function(err, saved) 
{
    if (err || !saved)
        console.log(err);
    else
        response.write("User Saved");
        response.end();
         });
}