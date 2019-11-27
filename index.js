const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname + '/src');
app.use(express.static(path.join(__dirname, '/src')));

app.get('', (req, res) => {
    res.sendFile(path.join(publicPath, 'index-guest.html'));
});

app.set('port', process.env.PORT || 3000);

// start server
app.listen(app.get('port'), () => {
    console.log(`server is listening`);
});