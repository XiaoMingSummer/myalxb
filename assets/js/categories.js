var getlist =()=>{
    // 获取分类目录动态数据
    $.ajax({
        type:'get',
        url:'/catagoriespage',
        dataType:'json',
        success:function(results){
           var html = template('catagories',{list:results})
           $('tbody').html(html)
        }
    })
}
$(function(){
    getlist()
   // 修改分类目录的数据
    $('tbody').on('click','.redact',function(){
        var data =$(this).data()
        // console.log(data)
        $('#name').val($(this).data().name)
        $('#slug').val($(this).data().slug)
        $('#id').val($(this).data().id)
        $('.add').css('display','none')
        $('.edit').css('display','block')
        $('.title').html('修改分类目录')
    })
    $('.edit').on('click',function(){
        $.ajax({
            type:'post',
            url:'/catagoriesedit',
            data:$('form').serialize(),
            success:function(results){
                // console.log(results)
                if(results.code ==200){
                    // console.log(122)
                    $('.reminder span').html(results.msg)
                    $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
                    getlist()
                    // 重置表单
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                    $('.add').css('display','block')
                    $('.edit').css('display','none')
                    $('.title').html('添加新分类目录')
                }else{
                    $('.reminder span').html(results.msg)
                    $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
                }
            }
        })
    })

    // 添加数据
    $('.add').on('click',function(){
         $.ajax({
             type:'post',
             url:'/catagoriesadd',
             data:$('form').serialize(),
             dataType:'json',
             success:function(results){
                //  console.log(results)
                if(results.code ==200){
                    $('.reminder span').html(results.msg)
                    $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
                    getlist()
                    // 重置表单
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                }else{
                    $('.reminder span').html(results.msg)
                    $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
                }
             }
         })
    })
})

function del (id){
   if(confirm('您是否确定删除')){
       $.ajax({
           type:'get',
           url:'/catagoriesdel',
           data:{id:id},
           dataType:'json',
           success:function(results){
               if(results.code ==200){
                    $('.reminder span').html(results.msg)
                    $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
                    getlist()
               }else{
                $('.reminder span').html(results.msg)
                $('.reminder').fadeIn(1000).delay(1000).fadeOut(1000)
               }
           }
       })
   }
}