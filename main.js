//importing modules
const express = require("express");
const bodyparser = require("body-parser");
 
// stores the express module into the app variable!
const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
 
//sends index.html
app.get("/", function (req, res) {
    res.sendFile(__dirname +"/bmi.html");
})
 
//post the data on the specific route
app.post("/", function (req, res) {
    console.log(req.body);
    var height = parseFloat(req.body.height)/100;
    var weight = parseFloat(req.body.weight);

    //calculate BMI
    var bmi = weight / (height * height);
 
    //number to string format
    bmi = bmi.toFixed(1);

    //pass values to bmiResults page
    res.render("bmiResult",{
        data: req.body,
        bmi: bmi});

        
})

//listen to port 3000
app.listen(3000, function(){
    console.log("server running on 3000");
})