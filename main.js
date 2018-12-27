let n = 1
let imgAmount = $('#imgVessel>img').length
init()

setInterval((e) => {
    $(`#imgVessel>img:nth-child(${imgIndex(n)}`).removeClass('current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`#imgVessel>img:nth-child(${imgIndex(n + 1)}`).removeClass('enter').addClass('current')
    n += 1
}, 2000)

function init(){
    $('#imgVessel>img:nth-child(1)').addClass('current')
    $('#imgVessel>img:nth-child(2)').addClass('enter')
    $('#imgVessel>img:nth-child(3)').addClass('enter')
    $('#imgVessel>img:nth-child(4)').addClass('enter')
    $('#imgVessel>img:nth-child(5)').addClass('enter')
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
