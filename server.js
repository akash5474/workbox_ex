const fs = require('fs');
const express = require('express');

const PORT = 8080;

const app = express();

const htmlFile = fs.readFileSync('./dist/static/app/index.html').toString();

app.use(express.static('./dist'));

app.use('*', (req, res) => {
    const html = htmlFile.split('<body>');
    html[1] = `
        <p>Content from server. This will not be available after refresh</p>
        ${html[1]}
    `;

    res.send(html.join('<body>'));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});