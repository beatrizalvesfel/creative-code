const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(3000);