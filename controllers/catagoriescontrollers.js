
var catagories =require('../datamodules/catagories')
var common =require('../datamodules/common')

// 获取分类目录动态数据
exports.catagoriespage=(req,res)=>{
    catagories.catagoriespage((err,data)=>{
          if(err){
              res.end('404')
          }else{
              res.json(data)
          }
    })
}

// 修改分类目录的数据
exports.catagoriesedit=(req,res)=>{
    // console.log(req.body)
    catagories.catagoriesedit(req.body,(err,data)=>{
          if(err){
              res.json({
                  code:201,
                  msg:'编辑失败'
              })
          }else{
              res.json({
                  code:200,
                  msg:'编辑成功'
              })
          }
    })
}

// 添加数据
exports.catagoriesadd=(req,res)=>{
    // console.log(req.body)
    catagories.catagoriesadd(req.body,(err,data)=>{
           if(err){
               res.json({
                   code:201,
                   msg:'添加失败'
               })
           }else{
              res.json({
                code:200,
                msg:'添加成功'
              })
           }
    })
}

// 删除单个数据
exports.catagoriesdel=(req,res)=>{
    // console.log(req.url)
    var id = common.getIdByUrl(req.url).id
    catagories.catagoriesdel(id,(err)=>{
         if(err){
             res.json({
                 code:201,
                 msg:'删除失败'
             })
         }else{
           res.json({
            code:200,
            msg:'删除成功' 
           })  
        }
    })
}