//=================================================================================================
// STEP1: Requiring necessary npm packages
//=================================================================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");
var methodOverride = require("method-override");
// Requiring passport as we've configured it
// var passport = require("./config/passport");
//=================================================================================================
// STEP2: Tells node that we are creating an "express" server
//=================================================================================================
var app = express();
// Sets an initial port. We"ll use this later in our listener
var port = process.env.PORT || 8475;
//my research shows me that bodyParser.urlencoded({extended: ...}) basically tells the system  
//whether you want to use a simple algorithm for shallow parsing (i.e. false) 
//or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
//research also shows that extended: true and app.use(bodyParser.json()) can be used together.
//The statement app.use(bodyParser.json()) is to be used independently, whether you set extended as true or false.
//URL encoding and JSON encoding both allow to convert a (nested) object to string, but the format is different. 
//An URL encoded string is in general not a valid JSON string. 
//So we also give app ability to parse JSON string:
app.use(bodyParser.json());
//And we also give app ability to parse text:
app.use(bodyParser.text());
//One application may use one encoding method, and another the other. As long as they don't mix the two, it will work.
//Next
// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
//middleware is for requests from clients that only natively support simple verbs like GET and POST. 
//So in those cases you could specify a special query field (or a hidden form field for example) that
//indicates the real verb to use instead of what was originally sent. 
//That way your backend .put()/.delete()/.patch()/etc. routes don't have to change 
//and will still work and you can accept requests from all kinds of clients
// app.use(methodOverride());
// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
//=================================================================================================
// STEP3: If we are using Handlebars
//=================================================================================================
// Set Handlebars.
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
//=================================================================================================
// STEP4: ROUTER --> Import routes and give the server access to them.
// In Model->View->Control: Routes (route files) are kept in Controller Folder
//=================================================================================================
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require(path.join(__dirname, './controllers/api-routes'))(app);
require(path.join(__dirname, './controllers/html-routes'))(app);
//=================================================================================================
// STEP5: LISTENER
// The below code effectively "starts" our server
//=================================================================================================
app.listen(port, function() {
    console.log("App listening on http://localhost:" + port);
  });
//=================================================================================================