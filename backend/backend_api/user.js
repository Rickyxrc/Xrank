let db = require('../db/index')

module.exports = (req, res) => {
    var sql = 'SELECT (SELECT name FROM names WHERE id = name_id)"name",sum(addvalue)"score" FROM record GROUP BY name_id ORDER BY sum(addvalue) desc;'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('error:' + err.message)
        }
        res.send(data)
    })
}