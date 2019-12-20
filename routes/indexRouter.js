let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
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