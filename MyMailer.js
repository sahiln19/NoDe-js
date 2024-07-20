class MyMail 
{
    constructor()
    {
        this.sender = "sahilnakiyam5@gmail.com";
        this.host = "gmail.com";
        this.password =  "123123"
    }
    send( reciver, subject , message)
    {
        console.log( ' I will send you email ' +  subject +  ' '  +  message)
    }
}
module.exports.MyMail = MyMail;
