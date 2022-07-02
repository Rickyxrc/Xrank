let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let router = require('./router')
let sqlinit = require('./db/init')
let path = require('path');
let dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

var history = require('connect-history-api-fallback');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(history());

if (sqlinit() != 0) {
    console.log('error:sql init failed.');
    process.exit()
}



app.listen(9000, () => {
    console.log('server started.');
});