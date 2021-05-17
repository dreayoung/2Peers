const express = require('express');
const { Student } = require('../models/Student');
const { Teacher } = require('../models/Teacher');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/api', (req, res) => {
  res.send({ message: 'Heyyyyyyyyy' });
});

router.post('/api/signup', async (req, res) => {
  try {
    if (req.body.checkbox === 'on') {
      bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if(err){
          res.send({ message: 'error' });
        }
        else {
            req.body.encrypt = hash;
            Teacher.signUp(req.body);
            res.send({ message: 'signed up as a teacher' })
        }
      });
    } 
    else {
      bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if(err){
            res.send({ message: 'error' });
        }
        else {
            req.body.encrypt = hash;
            Student.signUp(req.body);
            res.render({ message: 'signed up as a student' })
        }
      });
    }
  }
  catch (error) {
    res.send({ message: 'sign up total err'})
  }
});

router.post('/api/signin', async (req, res) => {
  debugger;
  const { encryptedpassword } = req.body;
  try {
    if (req.body.checkbox === 'on') {
      let user = await Teacher.getTeacher(req.body);
      if(user){
        let results = await bcrypt.compare(encryptedpassword, user.encryptedpassword);
        if(results){
          req.session.user = user
          req.body.valid = true;
        }
      }
    } 
    else {
      let user = await Student.getStudent(req.body);
      if(user){
        let results = await bcrypt.compare(encryptedpassword, user.encryptedpassword);
          if(results){
          req.session.user = user
        }
      }
    }
  }
  catch (error) {
    res.send({ message: 'total err'})
  }
});

module.exports = router;
