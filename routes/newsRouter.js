let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.limit == null || isNaN(req.query.limit))
    {
        req.query.limit = 4;
    }

    if(req.query.page == null || isNaN(req.query.page))
    {
        req.query.page = 1;
    }

    var request = req.query;
    let newsController = require('../controllers/newsController');
    newsController
        .getAll(request)
        .then(data => {
            res.locals.news = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('news');
        })
        .catch(error => next(error));
});

module.exports = router;