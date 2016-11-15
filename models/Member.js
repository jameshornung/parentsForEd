var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MemberSchema = new Schema({
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	email: {
		type: String
	}
	
}, { collection:'members'});

var Member = mongoose.model('member', MemberSchema);

module.exports = Member;