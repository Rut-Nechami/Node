/**
 * @typedef Students
 * @property {string} _id
* @property {string} firstName
* @property {string} lastName
* @property {string} phone
* @property {string} email
* @property {Institutions.model} institutionId
* @property {number} age
 */


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var StudentsSchema = new Schema({
	'firstName' : String,
	'lastName' : String,
	'phone' : String,
	'email' : String,
	'institutionId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Institutions'
	},
	'age' : Number
}, { timestamps : true });
StudentsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Students', StudentsSchema);
