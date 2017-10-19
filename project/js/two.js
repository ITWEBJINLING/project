$(function (){
    let MainUiLi=$('main>ul>li');
    // MainUiLi.on('mouseenter mouseleave',function(){
    //         $(this).stop();
    //         $(this).slideToggle();
    //     })
    MainUiLi.on('mouseenter',function(){
             $(this).css({transform:'scale(1.5,1.5)',transform:'rotate(180deg)'});
         })
    MainUiLi.on('mouseleave',function(){
        $(this).css({transform:'scale(1,1)'});
    })
})