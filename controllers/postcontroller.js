
var postsmodules = require('../datamodules/postsmodules')
module.exports ={
    getposts(req,res){
        // 获取posts动态数据
        // var query =req.query
       postsmodules.getposts(req.query,(err,data)=>{
              if(err){
                res.json({
                    code:201,
                    data :err
                })
              }else{
                res.json({
                    code:200,
                    data :data
                })
              }
       })
    }
}