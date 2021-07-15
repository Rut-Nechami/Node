const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true,
        minlength:7
    },
    kind:{
        type: String,
        required: true
    }
})
module.exports=mongoose.model('Users',userSchema);