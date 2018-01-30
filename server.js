const fs = require('fs');
const express = require('express');

const PORT = 8080;

const app = express();

const htmlFile = fs.readFileSync('./dist/static/app/index.html').toString();

app.use(express.static('./dist'));

app.use('*', (req, res) => {
    res.send(htmlFile);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});