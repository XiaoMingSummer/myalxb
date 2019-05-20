
// 引入并配置数据库
exports.mqsql=()=>{
    var mysql =require('mysql')
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'baixiu'
      })
    return connection
}

exports.getIdByUrl=(str)=>{
  var obj ={}
  str =str.substring(str.lastIndexOf('?')+1)
  var arr =str.split('&')
  for(var i =0 ;i<arr.length;i++){
    var temp = arr[i].split('=')
    obj[temp[0]]=temp[1]
  }
  return obj
}
