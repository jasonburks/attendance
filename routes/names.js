const express = require('express'); // dependencies from npm (package.json)

// Initialize our router
const router = express.Router();

const names = {};

router.get('/', function(req, res, next) {
  res.render('names.ejs', { names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  if (!(name.toLowerCase() in names)) {
    names[name.toLowerCase()] = { name: name, checkins: 1};
  }
  else {
    names[name.toLowerCase()].checkins++;
  }
  res.redirect('/names');
});

module.exports = router;
