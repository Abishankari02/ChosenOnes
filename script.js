var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring.parse(data1)["s_user"];
console.log(name);
var pwd = querystring.parse(data1)["s_pwd"];
console.log(pwd);
var email = querystring.parse(data1)["s_mail"];
console.log(email);
var name1 = querystring.parse(data1)["user"];
console.log(name1);
var pwd1 = querystring.parse(data1)["pwd"];
console.log(pwd1);

if (request.url === '/login') {
module.authenticateUser(name1, pwd1, response);
            } 
else if (request.url === '/sign') {
module.saveUser(name,pwd, email, response);
            } 
      });
    
}).listen(3000);
console.log("Server started");
