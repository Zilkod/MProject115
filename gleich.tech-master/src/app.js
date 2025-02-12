var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var fs = require('fs');
var morgan = require('morgan');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, '/views'));
app.use(morgan('combined'));
const blog = require('./blog.js');





app.get('/', function(req, res){
    res.render('index')
});

app.get('/index', function(req, res){
    res.render('index')
});


app.get('/blog', async function(req, res){
    let blog_data = await blog.get_blog_data();
    res.render('blog', {data:blog_data.reverse()});
});


app.get('/resume', function(req, res){
    res.render('resume')
});


app.get('/aboutme', function(req, res){
    res.render('aboutme')
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});


