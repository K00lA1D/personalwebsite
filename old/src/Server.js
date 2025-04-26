const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mailTransport = nodemailer.createTransport({
    service: 'Gmail', // Or another mail service
    auth: {
        user: 'your.email@gmail.com',
        pass: 'yourpassword'
    }
});

app.post('/api/sendmail', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'your.email@gmail.com', // Your email
        to: 'sidnair2003@gmail.com', // Where you want to receive the emails
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    mailTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Mail send error:', error);
            res.status(500).send({message: 'Failed to send email', error: error.message});
        } else {
            console.log('Mail sent:', info.response);
            res.send({message: 'Email sent successfully'});
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});