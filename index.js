const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.join(__dirname + '/src');
app.use(express.static(path.join(__dirname, '/src')));

app.get('', (req, res) => {
    res.sendFile(path.join(publicPath, 'index-guest.html'));
});

// start server
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});