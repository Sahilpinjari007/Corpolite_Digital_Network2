require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post('/', (req, res) => {

    const { name, emailFrom, number, subject, massage } = req.body;

    let transporter = nodemailer.createTransport({
        host: `${process.env.MAILE_HOSTER}`,
        port: `${process.env.MAILE_HOSTER_PORT}`,
        secure: false,
        auth: {
            user: `${process.env.MAILE_HOST_USER}`,
            pass: `${process.env.MAILE_HOST_PASS}`
        }
    });

    let info = {
        from: emailFrom,
        to: process.env.MAILING_EMAILE,
        subject: subject,
        text:  `${massage}

        myName: ${name}, mobileNumber: ${number}
        `
    }

    transporter.sendMail(info, (err, data) => {
        console.log(data);

        if (err) {
            console.log(err);
            return res.status(420).send({status: "error"});
        }
        else {
            return res.status(200).send({status: "success"});
        }
    });
});


module.exports = router;