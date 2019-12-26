let express = require('express');
let app = express();
let expressHbs = require('express-handlebars');
let paginateHelper = require('express-handlebars-paginate');
let bodyParse = require('body-parser');

app.use(express.static(__dirname + '/public'));

let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        createPagination: paginateHelper.createPagination,

        ifCond : function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    }
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Body Parser Middleware
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

//Cookie Parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

//Session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: null },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.username = req.session.user ? req.session.user.username : '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});

app.use('/', require('./routes/indexRouter'));
app.use('/search', require('./routes/searchRouter'));
app.use('/news', require('./routes/newsRouter'));
app.use('/support', require('./routes/supportRouter'));
app.use('/users', require('./routes/userRouter'));


app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(() => {
        res.send('database sync completed!')
    });
});
    
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Server is running');
});
