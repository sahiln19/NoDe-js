var connection = require('./connection');
var common = require('./common');

let update = function (request, response) {
    let requiredFields = ['id', 'oldpassword', 'newpassword'];
    let missingFields = common.getMissingFields(request.body, requiredFields);
    if(missingFields.length > 0 ){
        response.json({
            error:'no',
            success : 'no',
            message : `Missing fields: ${missingFields.join(',')}`
        })
        return;
    }
    else{
        let {id ,oldpassword, newpassword} = request.body;
        let sql = `select id from admin where id = ${id} and password = '${oldpassword}'`;
        connection.db.query(sql,function(error,result){
            if(error != null){
                response,json(`[{'error': 'error occured}]`)
            }
            else{
                let count = result.length;
                if(count === 0){
                    response.json(`[{'error' : 'no'},{'success' : 'no'}, {'message':'invalid password'} ]`)
                }
                else{
                    sql = `update admin set password = ${newpassword} where id = ${id}`;
                    connection.db.query(sql,function (error,result){
                        if(error != null){
                            response.json(`[{'error':'error occured'}]`)
                        }
                        else
                        response.json(`[{'error':'no'},{'success':'yes'},{'message':'password changed successfully'}]`)
                    })
                        }
                       
                }
            })
        }
    }

    let forgot_password = function (request, response) {
        let { email } = request.query;
        if(email === undefined){
            response.json({
                error : 'no',
                success : 'no',
                message : `email is missing`
            })
        }
        else
        {
            let sql = `select id from admin where email = '${email}`;
            connection.db.query(sql,function(error,result){
                if(error != null)
                response.json(`[{'error':'error occured'}]`)
                else{
                    let count = result.length;
                    if(count === 0){
                        response.json(`[{'error':'no'},{'success':'no'},{'message':'invalid email'}]`)
                    }
                    else{
                        var generatePassword = require('./password_generator');
                        var NewPassword = generatePassword.generate(8);
                        sql = `update admin set password = '${NewPassword}' where email = '${email}'`;
                        connection.db.query(sql , function(error,result){
                            if(error != null){
                                response.json(`[{'error':'error occcured'}]`)
                            }
                            else{
                                var mymail = require('./Email.js');
                                let mail_sender = new mymail.Email();
                                let subject = "Password recover email";
                                let message = "your new password is " + NewPassword;  
                                response.json(`[{'error':'no'},{'success':'yes'},{'message':'email sent successfully'}]`)
                                mail_sender.send(email,subject,message);
                            }
                        })
                       
                    }
                }
            })
        }
    }
        

    module.exports.update = update;
    module.exports.forgot_password = forgot_password;