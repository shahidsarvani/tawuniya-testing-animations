//Carousal counter
var totalItemsPop = $('#carouselExampleCaptions .carousel-item').length;
$('#carousel-count-length').html('0' + (totalItemsPop))
$('#carouselExampleCaptions').on('slide.bs.carousel', function () {
    setTimeout(function () {
        currentIndexPop = $('#carouselExampleCaptions div.active').index() + 1;
        $('#carousel-count-current').html('0' + currentIndexPop);
    }, 700);
});

// Counter Code Starts
function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(commaSeparateNumber(Math.ceil(now)));
        }
    });
});
// Counter Code Ends


$(document).ready(function () {

    // password show hide
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });

    //home page card hover
    $('.New_box__card').hover(
        //hoverIn
        function () {
            $(this).removeClass('hover-inactive').addClass('hover-active')
                .siblings().addClass('hover-inactive');
            $('.New_box').addClass('bg_dark_card').attr('id', ('card_' + $(this).index()))
        },
        //hoverOut
        function () {
            $(this).removeClass('hover-active');
            $('.New_box__card').removeClass('hover-inactive')
            $('.New_box').removeClass('bg_dark_card').removeAttr('id');
        }
    )

    //Header mega menu
    $('.nav-item').click(function () {
        if ($(this).find('a').hasClass('show')) {
            $('header').addClass('menu-mega_active');
        } else {
            $('header').removeClass('menu-mega_active');
        }
    })

    //adding classes for get app svg animation
    $('.anchor_circle').hover(
        //hoverIn
        function () {
            $(this).find('.anchor_circle__inner').addClass('hover-active');
            $(this).find('.anchor_circle__icon').attr('transform', 'translate(202.417 643.321) rotate(45)')
        },
        //hoverOut
        function () {
            $(this).find('.anchor_circle__inner').removeClass('hover-active');
            // $(this).find('.anchor_circle__icon').attr('transform', 'translate(189.917 648.499)')
        }
    )
    $('.anchor_circle').click(function () {
        $(this).find('.anchor_circle__inner').toggleClass('click-active');
        if ($(this).find('.anchor_circle__inner').hasClass('click-active')) {
            $(this).find('.anchor_circle__icon').attr('transform', 'translate(202.417 643.321) rotate(45)')
        } else {
            $(this).find('.anchor_circle__icon').attr('transform', 'translate(189.917 648.499)')
        }
        $(this).siblings().find('.anchor_circle__inner').removeClass('click-active');
        $(this).siblings().find('.anchor_circle__icon').attr('transform', 'translate(189.917 648.499)');
        // if (!$(this).find('.anchor_circle__inner').hasClass('click-active')) {
        //     $(this).find('.anchor_circle__inner').addClass('click-active');
        // } else {
        //     $(this).find('.anchor_circle__inner').removeClass('click-active');
        // }
        $('.svg_app_get').find('.mobile_image').attr('id', ('mobile_image_' + $(this).index()))
    })

    //add select2 to select box without search
    // $('#autoSizingSelect').select2({
    //     minimumResultsForSearch: -1
    // })

    // to stays open the mega menu while click on links inside
    $(".megamenu").click(function (e) {
        e.stopPropagation();
    })
    //removing menu-mega_active class from header when clicked on body
    $(document).on("click", function (event) {
        var $trigger = $(".nav-item");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('header').removeClass('menu-mega_active');
        }
    });

    //changing mobile image - get app section
    $('.change-img').click(function () {
        var img = $(this).data('img')
        $('#mobile-image').attr('src', img)
        $(this).parent().siblings().find('button').removeClass('element-active')
        if(!$(this).hasClass('element-active')) {
            $(this).addClass('element-active')
        } else {
            $(this).removeClass('element-active')
        }
    })
    $('.change-img').hover(
        function () {
            $(this).removeClass('btn-secondary').addClass('element-animation')
        },
        function() {
            $(this).removeClass('element-animation').addClass('btn-secondary')
        }
    )
});
