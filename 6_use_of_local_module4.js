const  mail = require('./MyMailer');
var m1 = new mail.MyMail();
m1.send('coderevoke@gmail.com', 'Text Message', 'hi,good morning')