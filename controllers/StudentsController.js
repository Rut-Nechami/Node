var StudentsModel = require('../models/StudentsModel.js');

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-rest-utils");

/**
 * Create a new Students
 * @route POST /students
 * @group students - Operations about students
 * @param {string} firstName.body
* @param {string} lastName.body
* @param {string} phone.body
* @param {string} email.body
* @param {objectid} institutionId.body
* @param {number} age.body
 * @returns {object} 200 - An array of Studentss
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.post(req, res, StudentsModel);
});

/**
 * Modify Students
 * @route PUT /students
 * @group students - Operations about students
 * @param {string} firstName.body
* @param {string} lastName.body
* @param {string} phone.body
* @param {string} email.body
* @param {objectid} institutionId.body
* @param {number} age.body
 * @returns {object} 200 - The newly modified Students
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.put(req, res, StudentsModel);
});



/**
 * Get all Studentss
 * @route GET /students
 * @group students - Operations about students
 * @param {string} _id.query - (optional) get by _id
* @param {string} firstName.query - (optional) get by firstName
* @param {string} lastName.query - (optional) get by lastName
* @param {string} phone.query - (optional) get by phone
* @param {string} email.query - (optional) get by email
* @param {objectid} institutionId.query - (optional) get by institutionId
* @param {number} age.query - (optional) get by age
 * @returns {object} 200 - An array of Studentss
 * @returns {Error}  default - Unexpected error
 */


router.get("/", function (req, res) {
    mongoose_utils.get(req, res, StudentsModel);
});

/**
 * Delete a Students
 * @route DELETE /students/:id
 * @group students - Operations about students
 * @param {string} id.query.required
 * @returns {object} 200 - An array of Studentss
 * @returns {Error}  default - Unexpected error
 */


router.delete("/:id", function (req, res) {
    mongoose_utils.delete(req, res, StudentsModel);
});

module.exports = router;