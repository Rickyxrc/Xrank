let db = require('../db/index')

module.exports = (req, res) => {
    if (req.query['API_KEY'] != process.env.API_KEY) {
        res.send('invalid API_KEY.');
        return 0;
    }
    else {
        var sql = 'INSERT INTO names (name) VALUES ' + req.query['data'] + ' ;'
        db.query(sql, (err, data) => {
            if (err) {
                return res.send('error:' + err.message);
            }
            res.send('OK');
        })
    }
}