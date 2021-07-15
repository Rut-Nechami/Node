var express = require('express');
var router = express.Router();
const institution = require('../controllers/institutionsController');

//router.post('/createInstitution/:userName/:password/:kind/:tel/:address/:email', institution.createInstitution);
router.post('/createInstitution/:userName/:password', institution.createInstitution);

module.exports = router;
