var express = require('express');

var port = 8000;

var app = express();
 

app.set('view engine', 'ejs');
app.set('views',__dirname+ "/views");
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(express.static('nodeget'));

var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]




app.get('/', function(req, res){
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
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