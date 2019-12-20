let express = require('express');
let app = express();
const expressHbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));

let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
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
