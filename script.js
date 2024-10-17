$('.hide').hide()

$('#showMore').on('click', function() {
    $(this).hide()
    $('#showLess').show()
    $('#details').html(`The MHS Trunk or Treat is an exciting event put on by our Peer Leaders, where anyone can bring
                        their kids to have a great time! It will be taking place on October 29th (see more details at
                        the bottom of the page), and admission is free (can't beat that)! We will also be accepting
                        donations for the American Cancer Society during the event! Our doors are open to children 12 &
                        under, where they can enjoy a variety of games, dance to music, and of course get some candy!
                        This will be a nut free event, though, so please do not bring any food containing nuts! Besides
                        the candy that may be offered by the various trunks available (they arent <i>just</i> for show),
                        we will be offering snacks from <a target="_blank" href="https://www.fedsonthego.com">Feds on the Go</a> and ice
                        cream from <a target="_blank" href="https://www.goldysicecream.com">Gold's Ice Cream</a>.`)
})

$('#showLess').on('click', function() {
    $(this).hide()
    $('#showMore').show()
    $('#details').html(`The MHS Trunk or Treat is an exciting event put on by our Peer Leaders, where anyone can bring
                        their kids to have a great time! It will be taking place on October 29th (see more details at
                        the bottom of the page), and admission is free...`)
})

var rellax = new Rellax('.rellax');

$('.rellax').on('mouseover', function () {
    $(this).css('z-index', '9').addClass('blurry').children().show();
}).on('mouseleave', function () {
    $(this).css('z-index', '1').removeClass('blurry').children().hide();
});

let cal1Opened = false
let cal2Opened = false

$('#view1').on('click', function () {
    $('#schedule1').css({
        'max-height': 'none'
    })
    if (cal1Opened == true) {
        $('#schedule1').css({
            'max-height': '9.5rem'
        })
    } else {
        $('#schedule1').css({
            'max-height': 'none'
        })
    }
    if (cal2Opened == false) {
        $('#schedule2').css({
            'max-height': '9.5rem'
        })
    } else {
        $('#schedule2').css({
            'max-height': 'none'
        })
    }
    $('#cal1').slideToggle()
    cal1Opened = !cal1Opened
})

$('#view2').on('click', function () {
    $('#schedule2').css({
        'max-height': 'none'
    })
    if (cal1Opened == false) {
        $('#schedule1').css({
            'max-height': '9.5rem'
        })
    } else {
        $('#schedule1').css({
            'max-height': 'none'
        })
    }
    if (cal2Opened == true) {
        $('#schedule2').css({
            'max-height': '9.5rem'
        })
    } else {
        $('#schedule2').css({
            'max-height': 'none'
        })
    }
    $('#cal2').slideToggle()
    cal2Opened = !cal2Opened
})