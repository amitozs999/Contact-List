var express = require('express');

var port = 8010;



var db=require('./config/mongoose')
var Contact=require('./models/contact');
var app = express();
 

app.set('view engine', 'ejs');
app.set('views',__dirname+ "/views");
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(express.static('assets'));

var contactList = [
    {
        name: "Amitoz singh",
        phone: "1474847"
    },
    {
        name: "Honey singh",
        phone: "378639"
    },
    {
        name: "drake",
        phone: "3880"
    }
]




app.get('/', function(req, res){
      Contact.find({}).exec(function(err,contacts){
     if(err){
          return;
      }
       return res.render('home',{
           title: "Contact List",
           contact_list: contacts});
       });

})
app.post('/create-contact', function(req, res){
    
    // contactList.push({
        
    //     name: req.body.name,
    //     phone: req.body.phone,
    // })
    contactList.push(req.body);
    return res.redirect('/');

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})



