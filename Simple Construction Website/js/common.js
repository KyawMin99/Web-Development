$(function(){
  $('.nav-icon').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('side-nav')){
      rightVal = -1024;
      $(this).removeClass('side-nav');
    }else{
      $(this).addClass('side-nav');
    }

    $('.navbar').stop().animate({
      right: rightVal
    }, 200);
  });
})
