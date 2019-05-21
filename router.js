

var express = require('express')
var getPageController =require('./controllers/getPageController')
var usercontroller =require('./controllers/usercontrollers')
var catagoriescontrollers =require('./controllers/catagoriescontrollers')
var postcontroller =require('./controllers/postcontroller')

var router =express.Router()

// 前端页面
router.get('/',getPageController.getindexpage)
       .get('/list',getPageController.getlistpage)
       .get('/detail',getPageController.getdetailpage)
// 后端页面
        .get('/admin',getPageController.adminindexpage)
        .get('/admin/categories',getPageController.admincategoriespage)
        .get('/admin/comments',getPageController.admincommentspage)
        .get('/admin/login',getPageController.adminloginpage)
        .get('/admin/nav-menus',getPageController.adminnavmenuspage)
        .get('/admin/password-reset',getPageController.adminpasswordresetpage)
        .get('/admin/post-add',getPageController.adminpostaddpage)
        .get('/admin/posts',getPageController.adminpostspage)
        .get('/admin/profile',getPageController.adminprofilepage)
        .get('/admin/settings',getPageController.adminsettingspage)
        .get('/admin/slides',getPageController.adminslidespage)
        .get('/admin/users',getPageController.adminuserspage)
//后端业务处理
        //  分类目录
        .post('/login',usercontroller.login)
        .get('/catagoriespage',catagoriescontrollers.catagoriespage)
        .post('/catagoriesedit',catagoriescontrollers.catagoriesedit)
        .post('/catagoriesadd',catagoriescontrollers.catagoriesadd)
        .get('/catagoriesdel',catagoriescontrollers.catagoriesdel)
        // 所有文章
        .get('/getposts',postcontroller.getposts)


module.exports =router