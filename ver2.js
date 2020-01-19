$(document).ready(function(){
    var cont = $('.active').find('span').text();
    $('.preview').text(cont);
    

    var fgWidth = $('figure').width()+10;
    var fgHeight = $('figure').height();
    var sliderWidh = fgWidth * $('figure').length;

    $('.slider .s_wrap').width(sliderWidh).css({
        'marginLeft' : -fgWidth
    });
    $('.slider figure:last-child').prependTo('.s_wrap');

    

    function turnLeft(){

        $('.slider .s_wrap').stop().animate({
            'left' : -fgWidth * 5
        }, 500, 'easeInOutQuint', function(){
            for(i = 0; i < 5; i++){
                $('.slider figure:first-child').appendTo('.s_wrap');
            }

            $('.slider .s_wrap').css({
                'left' : ''
            });

            $('figure.active').removeClass('active');
            $('figure').eq(1).addClass('active');
                cont = $('figure').eq(1).find('span').text();
            $('.preview').text(cont);
        });

    }

    function turnRight(){
        
        for(i = 0; i < 5; i++){
            $('.slider figure:last-child').prependTo('.s_wrap');
        }

        $('.slider .s_wrap').css({
            'left' : -fgWidth * 5
        });

        $('.slider .s_wrap').stop().animate({
            'left' : ''
        }, 500, 'easeInOutQuint', function(){
            $('figure.active').removeClass('active');
            $('figure').eq(5).addClass('active');
                cont = $('figure').eq(5).find('span').text();
            $('.preview').text(cont);
        });

    }


    $('.pager .left').on('click', function(){
        turnRight();
    });

    $('.pager .right').on('click', function(){
        turnLeft();
    });
    
    ///////////////////////////////////////////////////

    $('.btn .prv').on('click', function(){
        
        $('.slider .s_wrap').css({
            'left' : -fgWidth
        });
        
        $('.slider .s_wrap').stop().animate({
            'left' : ''
        });

        $('figure.active').prev().addClass('active').siblings().removeClass('active');
        
        $('.slider figure:last-child').prependTo('.s_wrap');

            cont = $('.active').find('span').text();
        $('.preview').text(cont);
    });

    $('.btn .nxt').on('click', function(){

        $('figure.active').next().addClass('active').siblings().removeClass('active');
        
        $('.slider .s_wrap').stop().animate({
            'left' : -fgWidth
        }, function(){
            $('.slider .s_wrap').css({
                'left' : ''
            });
            $('.slider figure:first-child').appendTo('.s_wrap');
        });
        

            cont = $('.active').find('span').text();
        $('.preview').text(cont);
    });

    ///////////////////////////////////////////////////
    $('figure').on('click', function(){

        $(this).addClass('active');

        $(this).siblings().removeClass('active')

            cont = $(this).find('span').text();
        $('.preview').text(cont);

    });

    
});// opening