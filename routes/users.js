var express = require('express');
var router = express.Router();
import User from '../models/User';

/* GET users listing. */
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;
