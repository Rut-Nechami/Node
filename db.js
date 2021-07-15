const mongoose = require('mongoose');

class db {
    constructor() { }
    async connectToMongo() {
        const url = "mongodb://srv1:27017/HostingGuide";

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log("DB connected!")
        })
            .catch((err) => { console.log(err) })
    }
}

module.exports = new db();