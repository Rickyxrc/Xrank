let db = require('./index')
function init() {
    console.log('initing database...')
    db.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            return -1;
        }
        else {
            conn.query('CREATE TABLE IF NOT EXISTS names(id int not null auto_increment primary key,name varchar(128));', (err, data) => {
                conn.query('CREATE TABLE IF NOT EXISTS record(addvalue integer(32),reason varchar(128),name_id int not null,foreign key(name_id)REFERENCES names(id)ON UPDATE CASCADE);', (err, data) => {
                    conn.release();
                    console.log('sql inited.');
                    return 0;
                })
            })
        }
    })
    return 0;
}
module.exports = init
