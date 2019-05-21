
var msq = require('./common')
var connection =msq.mqsql()
module.exports={
    // 获取posts动态数据
    getposts(query,callback){
        var sql =`select posts.id ,posts.title ,posts.status,posts.created,users.nickname,categories.name categoriesname
                        FROM posts
                        INNER JOIN users on posts.user_id = users.id
                        INNER JOIN categories on posts.category_id = categories.id 
                        limit ${(query.currentPage-1)*query.numberOfPages},${query.numberOfPages}`
    //    console.log(sql);
        
        connection.query(sql,function(err,results){
               if(err){
                   callback(err)
               }else{
                   var sql =`SELECT COUNT(*) con from posts`
                   connection.query(sql,function(err1,results1){
                    //    console.log(results1[0].con)
                    callback(null,{data:results,total:results1[0].con})
                   })
               }
        })
    }
}