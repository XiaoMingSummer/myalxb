
var querystring =require('querystring')
// 客户端获取首页
exports.getindexpage =(req,res)=>{
    // console.log(__dirname)
      res.render('index.ejs')
}
// 客户端获取list页面
exports.getlistpage =(req,res)=>{
    // console.log(__dirname)
     res.render('list.ejs')
}
// 客户端获取datail
exports.getdetailpage=(req,res)=>{
    res.render('detail.ejs')
}

// 服务端首页
exports.adminindexpage=(req,res)=>{
    // console.log(req.headers)
    // var mycookie = querystring.parse(req.headers.cookie)
    // console.log(mycookie)
    // if(mycookie.isLogin && mycookie.isLogin =='true'){
    //     res.render('admin/index.ejs')
    // }else{
    //     res.redirect('/admin/login')
    // }

    if(req.session.isLogin && req.session.isLogin =='true'){
        res.render('admin/index.ejs')
    }else{
        res.redirect('/admin/login')
    }
    
}

exports.admincategoriespage=(req,res)=>{
    res.render('admin/categories.ejs')
}

exports.admincommentspage=(req,res)=>{
    res.render('admin/comments.ejs')
}




exports.adminloginpage=(req,res)=>{
    res.render('admin/login.ejs')
}

exports.adminnavmenuspage=(req,res)=>{
    res.render('admin/nav-menus.ejs')
}

exports.adminpasswordresetpage=(req,res)=>{
    res.render('admin/password-reset.ejs')
}

exports.adminpostaddpage=(req,res)=>{
    res.render('admin/post-add.ejs')
}

exports.adminpostspage=(req,res)=>{
    res.render('admin/posts.ejs')
}

exports.adminprofilepage=(req,res)=>{
    res.render('admin/profile.ejs')
}

exports.adminsettingspage=(req,res)=>{
    res.render('admin/settings.ejs')
}

exports.adminslidespage=(req,res)=>{
    res.render('admin/slides.ejs')
}

exports.adminuserspage=(req,res)=>{
    res.render('admin/users.ejs')
}
