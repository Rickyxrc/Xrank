let db = require('../db/index')

exports.get = (req, res) => {
    if (req.query['API_KEY'] != process.env.API_KEY) {
        res.send('invalid API_KEY.');
        return 0;
    }
    else {
        var sql = 'SELECT * FROM names;'
        db.query(sql, (err, data) => {
            if (err) {
                return res.send('error:' + err.message);
            }
            res.send(data);
        })
    }
}