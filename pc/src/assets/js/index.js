import $ from 'jquery'
$(function () {
    // console.log(1111)
    // console.log($('.homebox').offset().top)
    var homeboxtop = $('.homebox').offset().top
    var ambienttop = $('.ambient').offset().top
    var abouytop = $('.abouy').offset().top
    var teachertop = $('.teacher').offset().top
    console.log(ambienttop)
    window.onscroll = function () {
        console.log(document.documentElement.scrollTop, '111', teachertop)
        if (document.documentElement.scrollTop >= homeboxtop - 50) {
            $('.ambient').addClass('anim')
        }
        if (document.documentElement.scrollTop >= (parseInt(ambienttop) + 200)) {
            $('.abouy').addClass('anim')
        }
        if (document.documentElement.scrollTop >= abouytop + 200) {
            $('.model').addClass('anim')
        }
        if (document.documentElement.scrollTop >= teachertop) {
            $('.foot').addClass('anim')
        }
    }
})
