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
    res.render('info');
});

module.exports = router;