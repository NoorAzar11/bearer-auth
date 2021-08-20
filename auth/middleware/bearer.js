'use strict';

const { users } = require('../models')

module.exports = async (req, res, next) => {


 const token = req.headers.authorization.split(' ').pop();

 const validUser = await users.authenticateToken(token);


  try {

    if (!req.headers.authorization) { _authError() }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);

    req.user = validUser;
    req.token = validUser.token;
 
    next();

  } catch (e) {
    
    next('Invalid Login catch');
  }

  function _authError() {
    next('Invalid Login ');
  }
}