let n
let imgAmount = $('#imgVessel>img').length
init()

let timer = setInterval((e) => {
    makeLeave(getImg(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImg(n+1))
    n += 1
}, 3000)

document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval((e) => {
            makeLeave(getImg(n))
                .one('transitionend', (e) => {
                    makeEnter($(e.currentTarget))
                })
            makeCurrent(getImg(n+1))
            n += 1
        }, 3000)
    }
})

function getImg(n){
    return $(`#imgVessel>img:nth-child(${imgIndex(n)}`)
}

function makeLeave($node){
    return $node.removeClass('current').addClass('leave')
}

function makeEnter($node){
    return $node.removeClass('leave').addClass('enter')
}

function makeCurrent($node){
    return $node.removeClass('enter').addClass('current')
}

function init(){
    n = 1
    $(`#imgVessel>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function imgIndex(n) {
    if (n > imgAmount) {
        n = n % imgAmount
        if (n === 0) {
            n = imgAmount
        }
    }
    return n
}


//思考过程
// setTimeout(()=>{
//     $('#imgVessel>img:nth-child(1)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('#imgVessel>img:nth-child(2)').removeClass('enter').addClass('current')
// },2000)

// setTimeout(()=>{
//     $('#imgVessel>img:nth-child(2)').removeClass('current').addClass('leave')
//     .one('transtionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('#imgVessel>img:nth-child(3)').removeClass('enter').addClass('current')
// },4000)

// setTimeout(()=>{
//     $('#imgVessel>img:nth-child(3)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('#imgVessel>img:nth-child(1)').removeClass('enter').addClass('current')
// },6000)
