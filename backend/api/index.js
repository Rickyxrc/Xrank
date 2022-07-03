let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let sqlinit = require('../db/init')
let path = require('path');

var history = require('connect-history-api-fallback');
app.use(history({index: '/'}));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

let user = require('../backend_api/user');
let upload = require('../backend_api/upload');
let queryuid = require('../backend_api/queryuid')
let adduser = require('../backend_api/adduser');
let userdetails = require('../backend_api/userdetail');

app.all('/api/user', user);
app.all('/api/upload', upload);
app.all('/api/queryuid', queryuid);
app.all('/api/adduser', adduser);
app.all('/api/userdetail', userdetails);


if (sqlinit() != 0) {
    console.log('error:sql init failed.');
    process.exit()
}

app.listen(80, () => {
    console.log('server started.');
});