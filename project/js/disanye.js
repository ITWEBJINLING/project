$(function () {
    let uls=$('Main>ul');
    let ulw=uls.outerWidth(true);
    let lis=$('Main>ul>li')
    let liw=lis.outerWidth(true);
    let t=setInterval(move,1000);
    let next=now=0;
    function move(){
        if(next>=lis.length-3){
            next--;
            uls.animate({left:`+=${liw}`})
        }
        else if(next>=0 && next<lis.length-3){
            next++;
            uls.animate({left:`-=${liw}`})
        }
    }
})

$(function () {
   let header=$('header .head-main ul');
    header.on('click',function () {
        $(this).find('li').each(function (value) {
            console.log(this);
            $(this[value]).css({color:'#fff'});
        })
        $(this).css({color:'#00DFB9'});
    })

})