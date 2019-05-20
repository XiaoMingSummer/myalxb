
var mysql =require('mysql')
exports.loginmodules =(email,callback)=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'baixiu'
      });
      var sql = 'select * from users where email = ?'
      connection.query(sql,[email], function (err, results) {
            if(err){
                // console.log(err)
                callback(err)
            }else{
                // console.log(results)
                callback(null,results[0])
            }
      });
}