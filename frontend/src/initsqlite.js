var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./data.db',function() {
  db.run("create table names(name varchar(128))",function(){
    db.run("create table record(name_id integer(32),value integer(32),reason varchar(128))",function(){
        console.log('inited sqlite database at ./data.db')
    })
  });
});

// create table names(name varchar(128))
// create table record(name_id integer(32),value integer(32),reason varchar(128)