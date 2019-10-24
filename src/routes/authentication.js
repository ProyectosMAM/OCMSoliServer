const express = require('express');
const router = express.Router();

const passport = require('passport');
const { TokenValidation } = require('../libs/verifyToken');
// const { isLoggedIn } = require('../libs/auth');

// SIGNUP
router.get('/signup', (req, res) => {
  // console.log("signUp");
  // res.render('auth/signup');
});

// SINGIN
router.get('/signin', (req, res) => {s
  // console.log("signIn");
  // res.render('auth/signin');
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/profile', TokenValidation, profile);

// router.get('/profile', isLoggedIn, (req, res) => {
//   console.log("Profile");
//   // res.render('profile');
// });

module.exports = router;
