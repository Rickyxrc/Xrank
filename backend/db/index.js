let mysql = require('mysql')

function getenv(env_name,required,default_value) {
    if (process.env[env_name] == undefined) {
        if (required) {
            console.log('environment',env_name, 'is required for this program.');
            process.exit()
        }
        else {
            return default_value;
        }
    }
    else {
        return process.env[env_name];
    }

}

var db = mysql.createPool({
    host: getenv('MYSQL_HOST', true, ''),     //数据库IP地址
    port: getenv('MYSQL_PORT', false, '3306'),
    user: getenv('MYSQL_USER', true, ''),          //数据库登录账号
    password: getenv('MYSQL_PASSWORD', false, ''),      //数据库登录密码
    database: getenv('MYSQL_DATABASE', true, '')       //要操作的数据库
})

module.exports = db