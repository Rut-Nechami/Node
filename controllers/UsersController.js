//const jwt = require('jsonwebtoken');
const express = require('express');
const Users= require('../Models/users');
const app = express();

const signIn = (req, res) => {
    console.log("#######get By Name & pass#############");
    Users.findOne({ "userName": req.params.userName, "password": req.params.password })
        .then((user) => {console.log(user);
            res.status(200).json({ theUser: user })
        })
        .catch((error) => {
            res.status(500).json({ error: error.massage, maggase: 'you have a problem' });
            console.log('err', error.massage);
        })

}
const createUser = async (req, res) => {
    try {
        const newUser = new Users(req.body)
        console.log(newUser);
        await newUser.save();
        res.send(newUser);
        res.status(200).json(newUser);
    }

    catch (error) {
        res.status(500).json({ err: console.error.message });
    }
}
const getAllUsers = async (req, res) => {
    console.log("get all");
    try {
        let users = await Users.find();
        if (users == null) {
            res.send("no users!");
        }
        return res.json({ status: 200, users: users })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { signIn,createUser ,getAllUsers};