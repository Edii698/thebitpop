const router = require("express").Router();
const express = require("express");
const userRoutes = require("./user");
const artRoutes = require("./art");
const productRoutes = require("./product");
const jwt = require('jsonwebtoken');
const db = require("../../models");
const app = express();
const config = require('../../config');

app.set('superSecret', config.secret); //secret variable

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// API routes
router.use("/user", userRoutes);

// router.post('/authenticate', function (req, res) {
//     let { firstName, lastName, email, password } = req.body;
//     // find the user
//     db.User.findOne({
//         email
//     }, function (err, user) {

//         if (err) throw err;

//         if (!user) {
//             res.json({ success: false, message: 'Authentication failed. User not found.' });
//         } else if (user) {

//             // check if password matches
//             if (user.password != req.body.password) {
//                 res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//             } else {

//                 // if user is found and password is right
//                 // create a token with only our given payload
//                 // we don't want to pass in the entire user since that has the password
//                 const payload = {
//                     admin: user.admin,
//                     email: user.email,
//                     firstName: user.firstName,
//                     lastName: user.lastName,
//                     id: user.id
//                 };
//                 var token = jwt.sign(payload, app.get('superSecret'), {
//                     expiresIn: "1 day" // expires in 24 hours
//                 });
//                 console.log(token);
//                 // return the information including token as JSON
//                 res.json({
//                     success: true,
//                     message: 'Enjoy your token!',
//                     token: token,
//                     firstName,
//                     lastName
//                 });
//             }

//         }

//     });
// });

// router.use(function (req, res, next) {

//     //checking for token in header or url parameters or post parameters
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];

//     //if there is a token - decode token
//     if (token) {

//         jwt.verify(token, app.get('superSecret'), function (err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 //if everthing is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }

//         });
//     } else {
//         //if there is no token - return error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided'
//         });
//     }
// });

router.use("/art", artRoutes);
router.use("/product", productRoutes);

module.exports = router;
