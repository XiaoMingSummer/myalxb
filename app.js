// https://github.com/wuhu0723/myalbx_30.git
var express =require('express')
var ejs =require('ejs')
var bodyParser =require('body-parser')
var session =require('express-session')

var router =require('./router')
var app = express()
app.listen(3008,()=>{
    console.log('http://127.0.0.1:3008')
})

// 静态资源
app.use('/assets',express.static('assets'))

// ejs配置
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))

// express-session配置
app.use(session({
    secret:'mysessiion',
    resave:false,
    saveUninitialized:false
}))

// 拦截器
app.use((req,res,next)=>{
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url.indexOf('/admin') == -1 || req.url == '/admin/login'){
        next()
    }else{
        res.redirect('/admin/login')
    }
})


app.use(router)