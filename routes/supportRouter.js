let express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    let newsController = require('../controllers/newsController');
    newsController
    .getNewNews()
    .then(data => {
        res.locals.newNews = data;
        res.render('support');
    })
    .catch(error => next(error));
});

router.post('/send', (req, res) => {
    const output = `
        <p>You have a new feedback.</p>
        <h3>Name: ${req.body.fullname}</h3>

        <h3>Feedback:</h3>
        <p>${req.body.comment}</p>
    `;

        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'nhokbm113@gmail.com', // generated ethereal user
            pass: 'nhokbmlove740119' // generated ethereal password
          }
        });

        let mailOptions = {
          from: '"Độc giả thư viện 👻" <nhokbm113@gmail.com>', // sender address
          to: "nhokbm13@gmail.com", // list of receivers
          subject: "Góp ý", // Subject line
          text: "", // plain text body
          html: output // html body
        };
      
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            res.render('support', {msg:"Góp ý của bạn đã được gửi thành công. Xin chân thành cảm ơn."});
        });   
});

module.exports = router;