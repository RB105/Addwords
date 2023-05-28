const express = require('express');

const app = express();

const HOST = '172.20.10.4';
const PORT = 4000;

app.use(express.json());

var words = [];

app.get('/get', (req, res) => {
    res.send(words);
});

app.post('/add', (req, res) => { 
    words.push(req.body);
    res.send(true);
});

app.listen(PORT, HOST, (req, res) => {
    console.log(`http://${HOST}:${PORT}`);
})