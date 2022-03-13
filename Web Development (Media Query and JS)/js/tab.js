$(function () {
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('labelColor').css('color', '#7F807B');


    $('#tabs-nav li').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        var currentActive = $(this).find("a").attr("href");
        $('.tab-content' + currentActive).show(30).siblings().hide();
        e.preventDefault();
    });


    $(".list-height").heightLine({
        fontSizeCheck: true
    });
    //sec-manufacturing-tab
    $('.sec-manufacturing-blk .manufac-lists li').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        var currentAttrValue = $(this).find("a").attr("href");
        $('.manufac-right-tab' + currentAttrValue).show().siblings().hide();
        e.preventDefault();
    });

});