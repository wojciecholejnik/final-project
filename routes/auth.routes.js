const express = require('express');
// eslint-disable-next-line no-unused-vars
const passport = require('passport');
const router = express.Router();



router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
