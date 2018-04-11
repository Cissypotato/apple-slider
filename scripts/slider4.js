


var btns=$('.btns>span')
var t=btns.length;

for(let i=0;i<btns.length;i++){
    btns.eq(i).on('click',function(e){
        let index=$(e.currentTarget).index()
        $('.slides').css({
            transform:'translateX('+(index*-900)+'px)'
        })
        $(e.currentTarget).addClass('active').siblings().removeClass('active')

    })
}