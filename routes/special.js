var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello from the GET call to the server on the route/users.ejs');
  res.render('travis', { title: 'Travis page'})
});

module.exports = router;
