let express = require('express');
let router = express.Router();
let user = require('./API/user');
let upload = require('./API/upload');

router.get('/user', user.get);
router.post('/user', user.get);
router.get('/upload', upload.get);
router.post('/upload', upload.get);

module.exports = router