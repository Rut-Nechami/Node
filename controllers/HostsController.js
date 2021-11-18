
const express = require('express');
const Host= require('../Models/HostsModel');
const Users = require('../Models/users');
const app = express();

const createHost = async (req, res) => {
    try {
        const {userName,password} = req.params;
        const{tel,address,email,SpecialCustoms,OccupationsFather,OccupationsMother,MaximumGuests}=req.body;
        console.log("req", req.body);
        const newUser= new Users({userName,password,kind:2});
        await newUser.save();
        console.log(newUser);
        const newHost=new Host({UserId:newUser._id,tel,address,email,SpecialCustoms,OccupationsFather,OccupationsMother,MaximumGuests});
        await newHost.save();
        res.send(newHost);
        res.send(newUser);
        res.status(200).json(newHost);
    }

    catch (error) {
        res.status(500).json({ err: console.error.message });
    }
}
module.exports={createHost};