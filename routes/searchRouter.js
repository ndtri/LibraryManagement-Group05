let express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res, next) => {
    if(req.query.limit == null || isNaN(req.query.limit))
    {
        req.query.limit = 6;
    }

    if(req.query.page == null || isNaN(req.query.page))
    {
        req.query.page = 1;
    }

    if (req.query.sort == null) {
        req.query.sort = 'title';
    }

    if (req.query.search == null || req.query.search.trim() == '') {
        req.query.search = '';
    }

    if (req.query.author == null || req.query.author.trim() == '') {
        req.query.author = '';
    }

    if(req.query.type == null || isNaN(req.query.type))
    {
        req.query.type = '';
    }

    var request = req.query;
    let bookController = require('../controllers/bookController');
    bookController
        .getAll(request)
        .then(data => {
            res.locals.books = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('search');
        })
        .catch(error => next(error));
});

router.get('/:id', (req, res) => {
    let newsController = require('../controllers/newsController');
    newsController
    .getNewNews()
    .then(data => {
        res.locals.newNews = data;
    })
    .catch(error => next(error));

    let bookController = require('../controllers/bookController');
    bookController
    .getById(req.params.id)
    .then(book => {
        res.locals.book = book;
        res.render('info');
    })
    .catch(error => next(error));
});

router.post('/:id', (req, res, next) => {
    let requestController = require('../controllers/requestController');
    let bookController = require('../controllers/bookController');
    let userController = require('../controllers/userController');

    let email = req.body.email;
    let pendingDate = req.body.pendingDate;
    let userId;
    let username;
    let bookId;
    
    userController
    .getUserByEmail(email)
    .then(user => {
        userId = user.id;
        username = user.username;
        return bookController.getById(req.params.id)
    })
    .then(book => {
        bookId = book.id;
        let request = {
            status: "Waiting",
            pendingDate: pendingDate,
            userId: userId,
            bookId: bookId
        };
        //console.log(request);

        const output = `
        <p>You have a new Request.</p>
        <h3>Name: ${username}</h3>
        <h3>Contact Email: ${email}</h3>

        <h3>Request:</h3>
        <h4>Book Title: ${book.title}</h4>
        <p>Pending Date: ${pendingDate}</p>
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
          from: '"Yêu cầu mượn sách 👻" <nhokbm113@gmail.com>', // sender address
          to: "nhokbm13@gmail.com", // list of receivers
          subject: "Mượn sách", // Subject line
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

        });   

        requestController.createRequest(request);
        res.redirect('/users/profile/' + username);
    })
    .catch(error => next(error));

});

module.exports = router;