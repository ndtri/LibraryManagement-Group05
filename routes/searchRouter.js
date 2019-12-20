let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let bookController = require('../controllers/bookController');
    bookController
        .getAll()
        .then(data => {
            res.locals.books = data;
            res.render('search');
        })
        .catch(error => next(error));
});

router.get('/:id', (req, res) => {
    let bookController = require('../controllers/bookController');
    bookController
    .getById(req.params.id)
    .then(book => {
        res.locals.book = book;
        res.render('info');
    })
    .catch(error => next(error));
});

module.exports = router;