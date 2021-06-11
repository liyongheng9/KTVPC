import $ from 'jquery'
$(function () {
    // console.log(1111)
    // console.log($('.homebox').offset().top)
    var homeboxtop = $('.homebox').offset().top
    var ambienttop = $('.ambient').offset().top
    var abouytop = $('.abouy').offset().top
    var teachertop = $('.teacher').offset().top
    // console.log(ambienttop)
    window.onscroll = function () {
        // console.log(document.documentElement.scrollTop, '111', teachertop)
        if (document.documentElement.scrollTop >= homeboxtop - 50) {
            $('.ambient').addClass('anim')
            $('.returntop').show()
        } else {
            $('.returntop').hide()
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
    $('.returntop').click(function () {
        // console.log(1)
        animate(window, 0)
    })
    function animate (obj, target) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {
            var step = (target - obj.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (obj.pageYOffset === target) {
                clearInterval(obj.timer)
            } else {
                obj.scroll(0, obj.pageYOffset + step)
            }
        }, 50)
    }
    $('.immobilization').on('mouseover', function() {
        $('.immobilization').fadeOut(100)
        $('.content .nav').fadeIn(1000)
    })
    $('.guanbi').on('click', function() {
        $('.content .nav').fadeOut(1000)
        $('.immobilization').fadeIn(1500)
    })
})
