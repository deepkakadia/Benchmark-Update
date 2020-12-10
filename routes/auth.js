const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../routes/validation');
const path = require('path')
// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
//User Register Route
router.post('/register', async (req, res) => {
  //Validating data from user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log("hello");
  //Checking if the user is already in database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send('Email already in the database');
  }

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  // Creating a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    await user.save();
    res.send({ user: user._id });
  } catch (e) {
    res.status(400).send(err);
  }
});

//User Login Route
router.post('/login', async (req, res) => {
  console.log(req.body);
  //Validating user Data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log("hello");
  //Checking if email exists i database
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Wrong Email!');
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  //Create and assign a token()
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send({ token: token });
});

module.exports = router;
