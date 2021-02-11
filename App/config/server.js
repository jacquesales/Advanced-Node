let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

let app = express();
app.set('view engine','ejs');
app.set('views','../views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

consign()
.include('../routes')
.then('./database.js')
.then('../models')
.into(app);

module.exports = app; 