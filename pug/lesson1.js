var express = require('express');
var app = express();
app.set("view engine","pug");
app.set("views","views");

app.get("/one", function(request,response){
    response.render('one')
});

app.get("/two", function(request,response){
    response.render('two')
});

app.get("/contactus", function(request,response){

    let branch = {
        address : 'vithalwadi near gandhisheri, bhavnagar',
        city : 'bhavnagar',
        name : 'sahil nakiya',
        contactno : '8401504254',
        email : 'sahilnakiyam5@gmail.com',
        pincode : '364001',
    }
    response.render('contactus', branch)
})

app.get("/loop1", function(request,response){
    let state = {
        district: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"
        ]
    };
    response.render('loop1', state)
})

app.get("/loop2", function(request,response){
    let list = {
        division : 'A division',
        students : [ "Aarav Sharma", "Vivaan Singh", "Aditya Agarwal", "Vihaan Iyer", "Arjun Menon",
            "Sai Prasad", "Reyansh Gupta", "Krishna Rao", "Ishaan Patel", "Shaurya Reddy",
            "Dhruv Desai", "Ritvik Nair", "Ananya Mehta", "Aditi Chandra", "Ishita Bhatnagar",
            "Diya Kapoor", "Saanvi Joshi", "Pari Srivastava", "Myra Bansal", "Anaya Roy"]
    }
    response.render('loop2',list)
})

app.get("/student", function(request,response){
    let data = {
        student : {
            name: "Anaya Roy", html: 85, css: 87, javascript: 90, get total() {
                return this.html + this.css + this.javascript;
        }
    }
}
    response.render('student', data)
})
app.listen(5000)
console.log('ready to connect with server')     