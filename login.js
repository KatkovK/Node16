const express= require('express');
const fs = require('fs');

const router = express.Router();

const log = 'admin';
const myPass = '1234';

router.get('/', function (req, res) {
   res.sendFile(__dirname + '/pages/login.html');

});

router.post('/', function (req, res) {

   if (!req.body) return res.sendStatus(400);

   if (req.body.logine === log && req.body.pass === myPass) {
      res.send('Authorization completed successfully');

   }
   else {
      res.send('Login or password is not correсtly');
   }

   let data = `Login: ${req.body.logine} password: ${req.body.pass}`;
   fs.appendFile("logger.txt", data + "\n", function () { })
});


module.exports = router;











