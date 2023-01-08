const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/controlTransport')
const cors = require('cors');
const transport = require('../model/modelTransport')


user.use(bodyParser.json());
user.use(
  cors({
  origin: '*',
})
);
user.use(express.urlencoded({extended: false}));
// user.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//      next();
//     });

user.get('/', (req, res) => {
    res.send('In Routes')
})

user.post('/addTransport',controller.addTransport);
user.get('/getTransport',controller.getTransport);
user.delete('/deleteTransport/:id',controller.deleteTransport);

// user.get("/getTransport", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );

//   transport.find()
//   .then((user) => {
//     res.status(200).json({
//       user: user,
//     });
//   });
// }





//   });

module.exports = user;