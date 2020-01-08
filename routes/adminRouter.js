let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.limit == null || isNaN(req.query.limit))
    {
        req.query.limit = 6;
    }

    if(req.query.page == null || isNaN(req.query.page))
    {
        req.query.page = 1;
    }

    if (req.query.search == null || req.query.search.trim() == '') {
        req.query.search = '';
    }

    var request = req.query;
    let adminController = require('../controllers/adminController');
    adminController
        .getAll(request)
        .then(data => {
            res.locals.adminBooks = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin-home');
        })
        .catch(error => next(error));
});

module.exports = router;