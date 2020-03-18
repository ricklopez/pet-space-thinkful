const express = require('express');
const winston = require('winston');
const users = require('./routes/users.routes');

const api = express();
const dbMgr = require('./data/db/jsondb-seed');

dbMgr.seedDb();


// Middleware
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});


api.use((req, res, next) => {
  logger.log({
  level: 'info',
  message: req.url
  });
  next();
})


api.use('/users', users);

// Routes
api.get('/ping', (req, res) => {
  res.send('All Good');
});










// Boot

api.listen(8088, function(){
  console.log("Express in lit and listening on 8088");
});