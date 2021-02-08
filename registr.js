const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
   res.sendFile(__dirname + '/pages/registration.html');
  
});

router.post('/', function (req, res) {
   
   if(!req.body) return res.sendStatus(400);  

   if(req.body.pass !== req.body.confirm) {
      res.send('Passwords do not match');
   } else {
      res.send('Registration successful!');
   }
   console.log(req.body);

   let data = `Registration: (Login: ${req.body.login} password: ${req.body.pass} email: ${req.body.email})`;
      fs.appendFile("logger.txt", data + "\n", function(){})
}); 

module.exports = router;