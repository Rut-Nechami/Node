
const express = require('express');
const Host= require('../Models/HostsModel');
const Users = require('../Models/users');
const app = express();

const createHost = async (req, res) => {
    try {
        console.log("req", req.body);
        const newUser= new Users({userName:req.params.userName,password:req.params.password,kind:2});
        await newUser.save();
        console.log(newUser);
        const newHost=new Host({UserId:newUser._id, });
        await newHost.save();
        res.send(newHost);
        res.send(newUser);
        res.status(200).json(newUser);
    }

    catch (error) {
        res.status(500).json({ err: console.error.message });
    }
}
module.exports={createHost};