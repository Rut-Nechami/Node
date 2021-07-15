const mongoose = require('mongoose');

const HostSchema = mongoose.Schema({
    // userName: {
    //     type: String,
    //     required: true
    // },
    UserId:{
        type:String,
        required:true
    },
    tel:{
        type: String
    },
    address:{
        type: String
    },
    email:{
        type: String
	},
	SpecialCustoms:{
		type:String
	},
	OccupationsFather:{
       type:String
	},
	OccupationsFather:{
        type:String
	},
	MaximumGuests:{
		type:Number
	}
})
module.exports=mongoose.model('Hosts',HostSchema);