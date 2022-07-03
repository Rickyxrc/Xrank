let express = require('express');
let router = express.Router();
let user = require('./API/user');
let upload = require('./API/upload');
let queryuid = require('./API/queryuid')
let adduser = require('./API/adduser')

router.get('/user', user.get);
router.post('/user', user.get);
router.get('/upload', upload.get);
router.post('/upload', upload.get);
router.get('/queryuid', queryuid.get);
router.post('/queryuid', queryuid.get);
router.get('/adduser', adduser.get);
router.post('/adduser', adduser.get);

module.exports = router