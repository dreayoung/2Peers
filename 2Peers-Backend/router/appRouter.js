const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');

const { Auth } = require('../models/Auth')
// const { Students } = require('../models/Students');

router.get('/api', (req, res) => {
    res.send({ message: 'Heyyyyyyyyy' });
  });

router.post('/api/signup', (req, res) => {
    if(req.body.checkbox !== 'on'){
       Auth.studentSignUp(req.body)
      res.send({message: 'student successfully signed up'})
    }
    else {
       Auth.teacherSignUp(req.body)
      res.send({message: 'teacher successfully signed up'})
    }
})

router.post('/api/signin', (req, res) => {
  debugger;
  if(req.body.checkbox !== 'on'){
    Auth.studentSignIn(req.body)
    res.send({message: 'signed in as a Student!'})
  } 
  else {
    Auth.teacherSignIn(req.body)
    res.send({message: 'signed in as a Teacher!'})
  }
})

module.exports = router;