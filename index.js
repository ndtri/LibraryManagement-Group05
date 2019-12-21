let express = require('express');
let app = express();
let expressHbs = require('express-handlebars');
let paginateHelper = require('express-handlebars-paginate');

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

app.use('/', require('./routes/indexRouter'));
app.use('/search', require('./routes/searchRouter'));

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
