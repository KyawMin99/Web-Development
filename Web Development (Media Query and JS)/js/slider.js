$(document).ready(function () {

    //sp manufacturing-tab-lists slide 
    function mobileViewUpdate() {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 767.9) {
            $(".sec-manufacturing-blk .manufac-lists").addClass("slider").addClass("manufac-list-slider");
            $('.manufac-list-slider').not('.slick-initialized').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
            });
        } else {
            $(".manufac-list-slider").removeClass("slider").removeClass("manufac-list-slider").slick('unslick');
        }
    }

    $(window).on('resize', function () {
        mobileViewUpdate();
        location.reload();
    });

    mobileViewUpdate();

    //manufacturing image slider
    $('.raw-slide').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.manufac-lists li').on('click', function () {
        $($(this).children('a').attr('href')).find('.slider').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        })
        $($(this).children('a').attr('href')).find('.slider').slick('refresh');
    })
});