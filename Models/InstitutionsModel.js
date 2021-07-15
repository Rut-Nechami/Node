const mongoose = require('mongoose');

const InstitutionSchema = mongoose.Schema({
    // userName: {
    //     type: String,
    //     required: true
    // },
    UserId:{
        type:String,
        required:true
    },
    kind:{
        type: String
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
    

})
module.exports=mongoose.model('Institutions',InstitutionSchema);