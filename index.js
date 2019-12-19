let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', ( req, res)=> {
    res.render('index');
})

app.get('/intro', (req, res) =>{
    res.render('intro');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.get('/support', (req, res) => {
    res.render('support');
})
    
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Server is running');
});
