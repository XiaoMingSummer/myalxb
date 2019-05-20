
var itcast ={
    getRouterName:(urlstr)=>{
        var index = urlstr.indexOf('?')
        var routername
        if(index ==-1){
           routername =urlstr.substring(urlstr.lastIndexOf('/')+1)
        }else{
            routername =urlstr.substring(urlstr.lastIndexOf('/')+1,index)
        }
        return routername
    }
}