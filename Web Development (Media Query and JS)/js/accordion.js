$(document).ready(function () {
    $('.accordion-block div:last-child > a').addClass('active');
    if ($('.accordion-block div:last-child > a').hasClass("active")) {
        $('.accordion-block div:last-child .about-content').show();
        $('.accordion-block div:last-child > a i')
            .removeClass("fa-plus-square")
            .addClass("fa-minus-square");
    }

    $(".about-purpose-list > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".about-content")
                .slideUp(200);
            $(".about-purpose-list > a i")
                .removeClass("fa-minus-square")
                .addClass("fa-plus-square");
        } else {
            $(".about-purpose-list > a i")
                .removeClass("fa-minus-square")
                .addClass("fa-plus-square");
            $(this)
                .find("i")
                .removeClass("fa-plus-square")
                .addClass("fa-minus-square");
            $(".about-purpose-list > a").removeClass("active");
            $(this).addClass("active");
            $(".about-content").slideUp(200);
            $(this)
                .siblings(".about-content")
                .slideDown(200);
        }
    });
});
