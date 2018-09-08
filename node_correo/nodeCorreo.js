var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mail',
        pass: 'pass'
    }
});

var mailOptions = {
    from: 'lucras015@gmail.com',
    to: 'ruf_rm@hotmail.com',
    subject: 'sending this mail using node.js',
    text: 'that was easy'
}

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        throw error;
    } else {
        console.log('Email sent: ' + info.response);
    }
});