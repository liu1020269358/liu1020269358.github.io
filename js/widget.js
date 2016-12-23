;$(function(){
    var returnTop = $('.return-top');
    returnTop.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    $(window).on('scroll', function(){
        if($(window).scrollTop() > $(window).height()){
            returnTop.fadeIn();
       }else{
            returnTop.fadeOut();
       }
    })
    $('.section').each(function(){
        $(this).on('mousemove', function(){
            var ID = '#' + $(this).attr('id') + '-link';
            $(ID).fadeIn();
        })

        $(this).on('mouseleave', function(){
            var ID = '#' + $(this).attr('id') + '-link';
            $(ID).fadeOut();
        })
    })
})