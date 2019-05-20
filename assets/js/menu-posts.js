
$(function(){
    var routername = itcast.getRouterName(location.href)
    // console.log(routername)
    var menuPosts =$('#menu-posts')
    if(routername =='posts' ||routername =='post-add' ||routername =='categories'){
        menuPosts.addClass('in')
        menuPosts.attr('aria-expanded',true)
    }
    var menuSettings =$('#menu-settings')
    if(routername =='nav-menus' ||routername =='slides' || routername =='settings'){
         menuSettings.addClass('in')
         menuSettings.attr('aria-expanded',true)
    }

    $('.'+routername).addClass('active')

})