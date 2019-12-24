let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let newsController = require('../controllers/newsController');
    newsController
    .getNewNews()
    .then(data => {
        res.locals.newNews = data;
    })
    .catch(error => next(error));

    let bookController = require('../controllers/bookController');
    bookController
    .getHotBook()
    .then(data => {
        res.locals.hotBooks = data;
        return bookController.getNewBook();
    })
    .then(data => {
        res.locals.newBooks = data;
        res.render('index');
    })
    .catch(error => next(error));  
});

router.get('/support', (req, res) => {
    let newsController = require('../controllers/newsController');
    newsController
    .getNewNews()
    .then(data => {
        res.locals.newNews = data;
        res.render('support');
    })
    .catch(error => next(error));
});

router.get('/intro', (req, res) => {
    let newsController = require('../controllers/newsController');
    newsController
    .getNewNews()
    .then(data => {
        res.locals.newNews = data;
        res.render('intro');
    })
    .catch(error => next(error));
});

module.exports = router;