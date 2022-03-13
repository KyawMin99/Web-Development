$(document).ready(function () {
    $(".footer-blk").heightLine({
        fontSizeCheck: true
    });

    function navFixed() {
        var viewportWidth = $(window).width();
        if (viewportWidth >= 1920) {
            $('.nav-bar').css('width', '1920px');
        } else {
            $('.nav-bar').css('width', '100%');
        }
    }

    $(window).on("load resize", function () {
        navFixed();
    });

    $('.btn-gnavi').on('click', function () {
        var rightVal = 0;
        if ($(this).hasClass('hb-open')) {
            rightVal = -1000;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('#global-navi').stop().animate({
            right: rightVal
        }, 200);
    });

    if (window.matchMedia('(min-width: 767.9px').matches) {
        $(".services-txt").heightLine({
            fontSizeCheck: true
        });

        $(".purpose-lh").heightLine({
            fontSizeCheck: true
        });

    } else {
        $(".services-txt").heightLine("destory");
        $(".purpose-list").heightLine("destory");
    }
})