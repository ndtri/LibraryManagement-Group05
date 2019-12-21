let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    // if(req.query.limit == null || isNaN(req.query.limit))
    // {
    //     req.query.limit = 4;
    // }
    // if(req.query.page == null || isNaN(req.query.page))
    // {
    //     req.query.page = 1;
    // }
    // if (req.query.sort==null){
    //     req.query.sort = 'rating';
    // }
    // if (req.query.search == null){
    //     req.query.search = '';
    // }
    var request = req.query;
    let bookController = require('../controllers/bookController');
    bookController
        .getAll(request)
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