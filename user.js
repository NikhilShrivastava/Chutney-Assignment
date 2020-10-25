const { urlencoded } = require('body-parser');
var express = require('express');
var app = express();
var port =  3000;
var path = require('path');



app.use(express.static(path.join(__dirname, 'assests')));
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routers'));
app.listen(3000,function (){
    console.log('Server running on 3000 port')
})



