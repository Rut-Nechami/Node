var express = require('express');
var router = express.Router();
const host = require('../controllers/HostsController');

//router.post('/createInstitution/:userName/:password/:kind/:tel/:address/:email', institution.createInstitution);
router.post('/createHost/:userName/:password', host.createHost);

module.exports = router;