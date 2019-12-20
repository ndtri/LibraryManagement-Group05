let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
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

router.get('/news', (req, res) => {
    res.render('news');
});

router.get('/support', (req, res) => {
    res.render('support');
});

router.get('/intro', (req, res) => {
    res.render('intro');
});

module.exports = router;