const express = require('express');
const Institution= require('../Models/InstitutionsModel');
const Users = require('../Models/users');
const app = express();

const createInstitution = async (req, res) => {
    try {
        console.log("req", req.body);
        const newUser= new Users({userName:req.params.userName,password:req.params.password,kind:2});
        await newUser.save();
        console.log(newUser);
        const newInstitution=new Institution({UserId:newUser._id, kind:req.body.kind,tel:req.body.tel,address:req.body.address,email:req.body.email});
        await newInstitution.save();
        res.send(newInstitution);
        res.send(newUser);
        res.status(200).json(newUser);
    }

    catch (error) {
        res.status(500).json({ err: console.error.message });
    }
}
module.exports={createInstitution};