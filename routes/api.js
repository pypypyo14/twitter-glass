const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let twitterUser = req.query.user;
  // ユーザ指定なし
  if (twitterUser.length == 0) {
    res.send('{}');
    return
  };

  let endpoint = "https://api.twitter.com/1.1/statuses/user_timeline.json?include_rts=1&count=200&screen_name=" + twitterUser;
  res.send('{"1577861405": 30}');
});

module.exports = router;

// res.send('{"1577861405": 30}');