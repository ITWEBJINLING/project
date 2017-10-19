$(function(){
    let banner=$('.banner');
    let lis=$('.banner>li');
    let liw=lis.width();
    let t=setInterval(move,3000);
    let next=now=0;
    function move(){
        next++;
        if(next==lis.length){
            next=0;
        }
        lis.eq(next).css({left:liw});
        lis.eq(next).animate({left:0});
        lis.eq(now).delay(next*20).animate({left:-liw});
        now=next;
    }
let rectangle=$('.rectangle');
rectangle.animate({left:-700,top:-850})


let xuxiankuang=$('.xuxiankuang');
    // xuxiankuang.animate(function () {
    //     $(this).css({width:'+=600',height:'+=410',display:'block'})
    // })
xuxiankuang.css({width:'+=600',height:'+=410',display:'block'})




    let zhezhao=$('.zhezhao');
    zhezhao.animate({left:'-50%'})
})