var express = require('express');
const app = express();
const { route } = require('./users');
var router = express.Router();

const jwt = require("jsonwebtoken");

var sql = require("mssql");

var MongoClient = require('mongodb').MongoClient;
var urlToCreate =  "mongodb://srv1:27017/<project>DB";; //srv1 in the seminar network. use localhost at home
var url =  "mongodb://srv1:27017/";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";
const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send("good")
});

router.get('/login', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  const { user, password } = req.query;
  const token = generateAccessToken(user);
  console.log("user ", user);
  res.json({ token });
  var config = {
    user: 'MBYDOMAIN/212047658',
    password: '',
    server: 'srv2\pupils',
    database: 'HostingGuide',
    options: {
      port: 0 //////// ask elkarif
    }
  };

  // router.get("/createDB", (req, res) => {
  //   MongoClient.connect(urlToCreate, function (err, db) {
  //     console.log("err", err)
  //     if (err) {
  //       console.error(err)
  //     } else {
  //       console.log("Database created!");
  //       db.close();
  //     }
  //     res.send();
  //   });
  // })
  
  // router.get("/createUserColection", () => {
  //   MongoClient.connect(url, function (err, db) {
  //     if (err) throw err;
  //     var dbo = db.db("projectDB");
  //     dbo.createCollection("users", function (err, res) {
  //       if (err) throw err;
  //       console.log("Collection created!");
  //       db.close();
  //     });
  //   });
  // })

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from Students', function (err, recordset) {

      if (err) console.log(err)

      // send records as a response
      console.log(recordset);

    });
  });
})

module.exports = router;
