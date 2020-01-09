let express = require('express');
let router = express.Router();
let models = require('../models');

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

router.get('/Request', (req, res, next) => {
    if(req.query.limit == null || isNaN(req.query.limit))
    {
        req.query.limit = 6;
    }

    if(req.query.page == null || isNaN(req.query.page))
    {
        req.query.page = 1;
    }

    var request = req.query;
    let requestController = require('../controllers/requestController');
    requestController
        .getAllRequest(request)
        .then(data => {
            res.locals.request = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('Request');
        })
        .catch(error => next(error));
});

router.post('/Request/update', (req, res) => {
    var query = req.query;
    let requestController = require('../controllers/requestController');
    requestController
        .getByBookId(req.body.bookId)
        .then(request => {
            if (request) {
                models.RequestBook
                .update({
                    status: "Pending"
                }, {
                    where: { bookId : req.body.bookId }
                })
                .then(function() {
                    requestController
                    .getAllRequest(query)
                    .then(request => {
                        //console.log(request);
                        res.locals.request = request;
                        res.redirect('/admin-home/Request');
                    });
                })
                .catch(function(error) {
                    res.json(error);
                    console.log("update status failed!");
                });
            }
        });
        
});

router.post('/Request/delete', (req, res) => {
    var query = req.query;
    let requestController = require('../controllers/requestController');
    requestController
        .getByBookId(req.body.delBookId)
        .then(request => {
            if (request) {
                models.RequestBook
                .destroy(
                {
                    where: { bookId : req.body.delBookId }
                })
                .then(function() {
                    requestController
                    .getAllRequest(query)
                    .then(request => {
                        //console.log(request);
                        res.locals.request = request;
                        res.redirect('/admin-home/Request');
                    });
                })
                .catch(function(error) {
                    res.json(error);
                    console.log("delete request failed!");
                });
            }
        });
        
});

module.exports = router;