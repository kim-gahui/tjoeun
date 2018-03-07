$(function(){
  var $devWidth;
  var $limitSize=767;

  $(window).resize(function(){
    $devWidth=$('body').width();
    if($devWidth < $limitSize){
      $('.btn-question').on('click',function(){
        $('.qna').stop().toggle();
        $(this).find('i').toggleClass('icon-help icon-cancel');
      })
    }else{
      $('.btn-question').on('click',function(){
        $('.qna').fadeIn();
      })
    }
  }).resize();

  var mobileSlide=new Swiper('.mobile-main-slide', {
    pagination:{
      el:'.mobile-main-slide .swiper-pagination',
      clickable:true,
    },
  });

  var mainSlide=new Swiper('.main-slide', {
      spaceBetween:30,
      pagination:{
        el:'.main-slide .swiper-pagination',
        clickable:true,
      },
    });

  var keywords=new Swiper ('.keywords',{
        navigation:{
          nextEl:'.keywords .swiper-button-next',
          prevEl:'.keywords .swiper-button-prev',
        },
        slidesPerView:3,
        spaceBetween: 40,
        loop:true,
      })

  var interview=new Swiper ('.interview', {
      navigation:{
        nextEl:'.interview .swiper-button-next',
        prevEl:'.interview .swiper-button-prev',
      },
      loop:true,
    })

    var mobiliInterview=new Swiper ('.mobile-interview', {
        navigation:{
          nextEl:'.mobile-interview .swiper-button-next',
          prevEl:'.mobile-interview .swiper-button-prev',
        },
        loop:true,
      })

  $('header .join').on('click', function(){
    $('.login_out').toggle();
  });

  $('.mobile .icon-login').on('click', function(){
    $('.mobile-login_out').slideToggle(function(){$('body').after('<div class="bg"></div>')});
  });

  $('#check').on('click', function(){
    $('#check').find('i').toggleClass('icon-check-empty icon-check')
  })

  $('.popup .icon-cancel, .popup .cancel').on('click', function(){
    $('.popup').fadeOut(function(){$('.bg').remove()});
  })

  var player=$('video')[0];
  var player2=$('video')[1];
  $('.interview button').on('click', function(){
    var name=$('.interview .swiper-slide-active img').attr('alt');
    player.currentTime=0;
    player2.currentTime=0;
    $('.video.'+name).fadeIn();
    $('body').after('<div class="bg"></div>');
  })
  $('.mobile-interview button').on('click', function(){
    var name=$('.mobile-interview .swiper-slide-active img').attr('alt');
    player.currentTime=0;
    player2.currentTime=0;
    $('.video.'+name).fadeIn();
    $('body').after('<div class="bg"></div>');
  })

  $('.icon-menu').on('click', function(){
    $('header').addClass('on');
    $('body').append('<div class="bg"></div>');
  })
  $('.mobile nav').on('click', function(e){
    e.preventDefault();
    $('header').removeClass('on');
    $('.bg').remove();
  })

  $('.btn-search, .category a, .keywords a, .mobile-interview a, .interview a, table a, footer a').on('click', function(e){
    e.preventDefault();
  })

  $('#goTop').on('click', function(){
    $('.qna_list').animate({
      scrollTop:0
    }, 500)
  })

  $('#goBottom').on('click', function(){
    $('.qna_list').animate({
      scrollTop:400
    }, 500)
  })
})
