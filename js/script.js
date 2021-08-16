$(function(){
    $('.btn').click(function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').click(function(){
        $('#header').removeClass('open');
    });

    $('.page-link a').click(function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    $('a[href^="#"]').click(function(){
        let href = $(this).attr('href');

        let target = $(href == "#" || href == "" ? 'html' : href);

        let position = target.offset().top;

        $('html,body').animate({scrollTop:position}, 600,"swing");

        return false;
    });

    $(window).scroll(function(){
        $('.fadein').each(function(){
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if(scroll > target - windowHeight + 200){
                $(this).css('opacity','1');

                $(this).css('transform','translateY(0)');
            }
        })
    })

    $('.center').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
});