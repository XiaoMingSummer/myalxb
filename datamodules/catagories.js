
var  mysql =require('./common')

var connection =mysql.mqsql()

// 获取分类目录动态数据
exports.catagoriespage=(callback)=>{
    var sql = `select * from categories where slug  != 'uncategorized'`
    connection.query(sql,function(err,results){
                if(err){
                    callback(err)
                }else{
                    callback(null,results)
                }
    })
}

// 修改分类目录的数据
exports.catagoriesedit=(data,callback)=>{
    var sql = 'UPDATE categories SET slug =?,name=? WHERE id =?'
    connection.query(sql,[data.slug,data.name,data.id],function(err,results){
           if(err){
               callback(err)
           }else{
               callback(null,results)
           }
    })

}

// 添加数据
exports.catagoriesadd=(data,callback)=>{
    var sql ='INSERT into categories VALUES(null,?,?)'
    connection.query(sql,[data.slug,data.name],function(err,results){
              if(err){
                //   console.log(err)
                  callback(err)
              }else{
                  callback(null,results)
              }
    })
}

// 删除数据
exports.catagoriesdel=(id ,callback)=>{
    var sql ='DELETE from categories where id ='+id
    connection.query(sql,function(err,results){
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}