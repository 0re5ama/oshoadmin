const express = require('express'),
  app = express(),
  config = require('./config'),
  port = config.port,

  const routes = require('./app/routes') (app);

app.listen(port, () => {
  console.log('Server Started Successfully...');
});
