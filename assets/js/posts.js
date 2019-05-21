$(function(){
    var currentPage =1
    var numberOfPages =1
    var total =5
   function initData (){
        $.ajax({
            type:'get',
            url:'/getposts',
            data:{
                currentPage,
                numberOfPages
            },
            dataType:'json',
            success :function(result){
                // console.log(result)
                if(result.code ==200){
                    var html =template('postsmodules',result.data)
                    $('tbody').html(html)
                    setPage(Math.ceil(result.data.total/numberOfPages))
                }
            }
        })
   }
   initData()

    function setPage(total){
        $('.pagination').bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: currentPage,
            // 总页数
            totalPages: total,
            onPageClicked: function (event,originalEvent,type,page) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                // console.log(page)
                currentPage = page
                initData()
            }
        })
    }
})