let $slider = $('#slider')
let $imgs = $('#slider>img')
let $btns = $('#btnWrapper>button')
let current = 0

makeFakeSliders()

$('#previous').on('click',()=>{  
    goToSlider(current-1)
})
$('#next').on('click',()=>{
    
    goToSlider(current+1)
})

let timer = setInterval(() => {
    goToSlider(current+1)
}, 2000);

$('#container').on('mouseenter',()=>{
    window.clearInterval(timer)
})
$('#container').on('mouseleave',()=>{
    timer = setInterval(() => {
        goToSlider(current+1)
    }, 2000);
})

$('#btnWrapper').on('click','button',(e)=>{
    let index = $(e.currentTarget).index()
    goToSlider(index)
})
function goToSlider(index){
    if(index>$btns.length-1){
        index = 0
    }else if(index<0){
        index = $btns.length-1
    }

    if(current === $btns.length-1 && index === 0){
        //最后一张到第一张
        $slider.css({transform:`translateX(${-($btns.length+1)*400}px)`})
        .one('transitionend',()=>{
            $slider.hide().offset()
            $slider.css({transform:`translateX(${-(index+1)*400}px)`}).show()
        })
    }else if(current === 0 && index === $btns.length-1){
        //第一张到最后一张
        $slider.css({transform:`translateX(0px)`})
        .one('transitionend',()=>{
            $slider.hide().offset()
            $slider.css({transform:`translateX(${-(index+1)*400}px)`}).show()
        })
    }else{
        $slider.css({transform:`translateX(${-(index+1)*400}px)`})
    } 
    current = index
}



/* function bindEvent(){
    $btns.eq(0).on('click',()=>{
        if(current === 4){
            $slider.css({transform:'translateX(-2400px)'})
            .one('transitionend',()=>{
                $slider.css({transform:'translateX(-400px)'})
                .hide()
                $slider.offset()
                $slider.show()
            })
        }else{
            $slider.css({transform:'translateX(-400px)'})
            current = 0
        }       
    })
    $btns.eq(1).on('click',()=>{
        $slider.css({transform:'translateX(-800px)'})
        current = 1
    })
    $btns.eq(2).on('click',()=>{
        $slider.css({transform:'translateX(-1200px)'})
        current = 2
    })
    $btns.eq(3).on('click',()=>{
        $slider.css({transform:'translateX(-1600px)'})
        current = 3
    })
    $btns.eq(4).on('click',()=>{
        if(current === 0){
            $slider.css({transform:'translateX(400px)'})
            .one('transitionend',()=>{
                $slider.css({transform:'translateX(-400px)'})
                .hide()
                $slider.offset()
                $slider.show()
            })
        }else{
            $slider.css({transform:'translateX(-2000px)'})
            current = 4
        }   
    })
}
 */

function makeFakeSliders(){
    let $firstCopy = $imgs.eq(0).clone(true)
    let $lastCopy = $imgs.eq(length-1).clone(true)
    $slider.append($firstCopy)
    $slider.prepend($lastCopy)
}