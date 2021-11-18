const express = require('express');
const Institution= require('../Models/InstitutionsModel');
const Users = require('../Models/users');
const app = express();

const createInstitution = async (req, res) => {
    try {
        const { userName,  password } = req.params;     
        console.log("I got to here 1");      
        const newUser= new Users({userName,password,kind:2});
        console.log(newUser);    
        await newUser.save();
        //res.send(newUser);
        console.log(newUser);
        const newInstitution=new Institution({UserId:newUser._id, kind:req.body.kind,tel:req.body.tel,address:req.body.address,email:req.body.email});
        console.log("I got to here 3"); 
        await newInstitution.save();
        res.send(newInstitution);
        res.send(newUser);
        res.status(200).json(newInstitution);
    }

    catch (error) {
        res.status(500).json({ err: console.error.message });
    } 
}
module.exports={createInstitution};