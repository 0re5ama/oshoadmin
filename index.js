const express = require('express'),
  app = express(),
  config = require('./config'),
  port = config.port,
  hbs = require('express-handlebars');

const routes = require('./app/routes/routes') (app);

app.engine('hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views'
}));

app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log('Server Started Successfully...');
});
