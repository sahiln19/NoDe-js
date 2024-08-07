var connection = require("./connection");
var common = require("./common.js");

let insert = function (request, response) {
    let { name, email, password, mobileno, city, address, bloodgroup, dob, gender } = request.body;

    const requiredFields = ['name', 'email', 'password', 'mobileno', 'city', 'address', 'bloodgroup', 'dob', 'gender'];
    const missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length > 0) {
        response.json({
            error: 'no',
            success: 'no',
            message: `Missing fields: ${missingFields.join(',')}`
        });
        return;
    }
    else {
        let sql = `insert into doctor (name,email,password,mobileno,city,address,bloodgroup,dob,gender) values ('${name}','${email}','${password}','${mobileno}','${city}','${address}','${bloodgroup}','${dob}','${gender}')`;

        connection.db.query(sql, function (error, result) {
            if (error != null) {
                if (error.code === 'ER_DUP_ENTRY') {
                    response.json("[{'error':'no'},{'success':'no'},{'message':'email/mobile is already regisered with us'}]");
                }
                else {
                    response.json("[{'error':'no'},{'success':'no'},{'message':'something went wrong, please try after someimes'}]");
                }
                console.log(error);
            }
            else {
                response.json("[{'error':'no'},{'success':'yes'},{'message':'registered successfully'}]");
            }
        });
    }
}
//change password
let update = function (request, response) {
    let requiredFields = ['id', 'oldpassword', 'newpassword'];
    let missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length > 0) {
        response.json({
            error: 'no',
            success: 'no',
            message: `Missing fields: ${missingFields.join(',')}`
        });
        return;
    }
    else {
        let { id, oldpassword, newpassword } = request.body;
        //check id and password combination is valid or invalid
        let sql = `select id from doctor where id=${id} and password='${oldpassword}'`;
        connection.db.query(sql, function (error, result) {
            if (error != null)
                response.json("[{ 'error': 'error occured' }]");
            else {
                let count = result.length;
                if (count === 0)
                    response.json("[{'error':'no'},{'success':'no'},{'message':'invalid  password'}]");
                else {
                    sql = `update doctor set password='${newpassword}' where id=${id}`;
                    connection.db.query(sql, function (error, result) {
                        if (error != null)
                            response.json("[{ 'error': 'error occured' }]");
                        else
                            response.json("[{'error':'no'},{'success':'yes'},{'message':'password changed successfully'}]");
                    });
                }
            }
        })

    }

}
//localhost:5000/patient?email=theeasylearn@gmail.com
let forgot_password = function (request, response) {
    let { email } = request.query;
    if (email === undefined) {
        response.json({
            error: 'no',
            success: 'no',
            message: `email is missing`
        });
    }
    else {
        let sql = `select id from doctor where email='${email}'`;
        connection.db.query(sql, function (error, result) {
            if (error != null)
                response.json("[{ 'error': 'error occured' }]");
            else {
                let count = result.length;
                if (count === 0) {
                    response.json("[{'error':'no'},{'success':'no'},{'message':'email not registered with us'}]");
                }
                else {
                    //generate randome password
                    var generatePassword = require('./password_generators.js');
                    var NewPassword = generatePassword(10);
                    sql = `update doctor set password='${NewPassword}' where email='${email}'`;
                    connection.db.query(sql, function (error, result) {
                        if (error != null)
                            response.json("[{ 'error': 'error occured' }]");
                        else {
                            //send email
                            let mymail = require("./Email.js");
                            //create object of mail class
                            let mail_sender = new mymail.Email();
                            let subject = "Password recover email";
                            let message = "your new password is " + NewPassword;
                            response.json("[{'error':'no'},{'success':'yes'},{'message':'please check your email for password recovery'}]");
                            mail_sender.send(email, subject, message);
                        }
                    });
                }
            }
        });
    }
}

let select = function (request, response) {
    var requiredFields = ['email', 'password'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length > 0) {
        response.json({
            error: 'no',
            success: 'no',
            message: `Missing fields: ${missingFields.join(',')}`
        });
    }
    else {
        let { email, password } = request.body;
        let sql = `select id from doctor where email='${email}' and password='${password}'`;
        connection.db.query(sql, function (error, result) {
            if (error != null)
                response.json("[{'error':'error occured'}");
            else 
            {
                if(result.length === 0)
                {
                    response.json("[{'error':'no'},{'success':'no'},{'message':'invalid login attempt'}]");
                }
                else 
                {
                    response.json("[{'error':'no'},{'success':'yes'},{'message':'login successfully'}]");
                }
            }
            
        });
    }
}
module.exports.insert = insert;
module.exports.update = update;
module.exports.forgot_password = forgot_password;
module.exports.select = select;