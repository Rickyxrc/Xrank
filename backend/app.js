let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let router = require('./router')
let sqlinit = require('./db/init')

app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(router);

if(sqlinit()!=0)
    process.exit()

app.listen(80, () => {
    console.log('server started.');
})