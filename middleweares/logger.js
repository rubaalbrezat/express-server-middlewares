'use strict';

function logger(req, res, next) {

    req.date = new Date().toLocaleDateString();
    console.log(req.date);
    next();
  
}


module.exports = { logger };