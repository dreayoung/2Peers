const express = require('express');
const { Student } = require('../models/Student');
const { Teacher } = require('../models/Teacher');
const router = express.Router();
const bcrypt = require('bcrypt');

let userSess = {user: '', valid: ''};

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
            res.redirect('/')
        }
      });
    } 
    else {
      await bcrypt.hash(req.body.encryptedpassword, 10, (err, hash) => {
        if(err){
            res.send({ message: 'error' });
        }
        else {
            req.body.encrypt = hash;
            Student.signUp(req.body);
            res.redirect('/')
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
          req.session.user = user
          req.body.valid = true;
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
          req.session.user = user
          req.body.valid = true;
        }
      }
    }
  }
  catch (error) {
    res.send({ message: 'total err'})
  }
});

// router.get('/login', (req, res) => {
//   res.send({ passedData: userSess });
// });

router.get('/', (req, res) => {
  res.send({ passedData: userSess });
});

module.exports = router;