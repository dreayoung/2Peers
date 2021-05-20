const express = require('express');
const { Student } = require('../models/Student');
const { Teacher } = require('../models/Teacher');
const router = express.Router();
const bcrypt = require('bcrypt');

let userSess = {user: '', valid: '', role: ''};

router.post('/signup', async (req, res) => {
  try {
    if (req.body.checkbox === 'on') {
      await bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
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
      await bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if(err){
            res.send({ message: 'error' });
        }
        else {
          debugger;
            req.body.encrypt = hash;
            Student.signUp(req.body);
            res.send({ message: 'signed up as a student' })
        }
      });
    }
  }
  catch (error) {
    res.send({ message: 'sign up total err'})
  }
});

router.post('/signin', async (req, res) => {
  const { encryptedpassword } = req.body;
  try {
    if (req.body.checkbox === 'on') {
      let user = await Teacher.getTeacher(req.body);
      userSess.user = user
      if(user){
        let results = await bcrypt.compare(encryptedpassword, user.encryptedpassword);
        if(results){
          userSess.valid = true;
          userSess.checkbox = 'on'
          userSess.role = 'teacher'
          req.session.user = user
        }
      }
    } 
    else {
      let user = await Student.getStudent(req.body);
      userSess.user = user
      if(user){
        let results = await bcrypt.compare(encryptedpassword, user.encryptedpassword);
          if(results){
          userSess.valid = true;
          userSess.checkbox = 'off'
          userSess.role = 'student'
          req.session.user = user
        }
      }
    }
  }
  catch (error) {
    res.send({ message: 'total err'})
  }
});

router.get('/api', (req, res) => {
  res.send({ passedData: userSess });
});

module.exports = router;