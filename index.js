var express = require('express'),
    morgan = require('morgan');

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
  console.log('Web server is now running on port 3000');
});
