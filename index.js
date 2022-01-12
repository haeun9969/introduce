const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var router = require('./router/main')(app);

//app setting
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

//server setting
var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000")
  app.use(express.static('public'));
});




