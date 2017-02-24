var express = require('express')
var app = express();
var http = require('http');
var path = require('path');

var index = require('../routes/index');
//app.use(express.static('build'));
app.set('views', './build');

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', function (req, res) {
  res.sendFile('${process.cwd()}/build/index.html');
})



app.get('/view', index.view);

const PORT = process.env.PORT || 3001;

http.createServer(app).listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

