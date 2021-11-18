var express = require('express');
var router = express.Router();
const user = require('../controllers/UsersController')

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";
const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};
/* GET users listing. */
 router.get('/signIn/:userName/:password', user.signIn);
 router.post('/createUser', user.createUser);
 router.get('/getAllUsers', user.getAllUsers);



module.exports = router;
