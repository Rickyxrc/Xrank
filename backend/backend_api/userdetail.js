let db = require('../db/index')

module.exports = (req, res) => {
    var sql = 'select addvalue,reason from record where name_id=(SELECT id FROM names WHERE name=\"'+req.query['data']+'\");'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('error:' + err.message);
        }
        res.send(data);
    })
}