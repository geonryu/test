$(document).ready(function(){

    var boxwidth = $('article').width();
    var boxheight = $('article').height();
    var countBox = $('article').length;
    var totalwidth = boxwidth * countBox + 5 * countBox -5;
                    //박스 개당 너비 x 박스의 총 개수    
                    //마진 5px, last 마진 0)        

    //슬라이더 너비값 설정
    $('#wrap').css({
        'width' : totalwidth + boxwidth * 2,
        'height' : boxheight * 2,
        'marginLeft' : -boxwidth * 4 + 50
    }); 

    //섬네일 확대
    $('article').on('mouseover', function(){

        $('#wrap').css({
            'transitionDelay' : 0.5
        })


        var indexBox = $(this).index();
        switch(indexBox){
            case 4 : $('#wrap').stop().animate({
                'left' : ''
            }, 200);
            break;
            case 5 : $('#wrap').stop().animate({
                'left' : ''
            }, 200);
            break;
            case 6 : $('#wrap').stop().animate({
                'left' : -1* boxwidth * 0.3
            }, 200);
            break;
            case 7 : $('#wrap').stop().animate({
                'left' : -1* boxwidth * 0.9
            }, 200);
            break;
        };  
        console.log(indexBox);
        
        $(this).stop().animate({////////확대
            'width' : boxwidth * 2,
            'height' : boxheight * 2,
            'top' : -boxheight * 0.5 + 10
        });


        //텍스트박스
        $(this).find('.txt').stop().fadeIn();
        $(this).find('h3').css({
            'bottom' : '50%',
            'fontSize' : 36,
            'text-indent' : '120px'
        });
        $(this).find('ul').stop().fadeIn();

    }).on('mouseout', function(){///////축소

        $('#wrap').stop().animate({
            'left' : ''
        })

        $(this).stop().animate({
            'width' : boxwidth,
            'height' : boxheight,
            'top' :0
        });

        //텍스트박스
        $(this).find('.txt').stop().fadeOut(100);
        $(this).find('h3').css({
            'bottom' : -38,
            'fontSize' : 16,
            'text-indent' : 0
        });
        $(this).find('ul').stop().fadeOut(100);

    });

    console.log(totalwidth);///////////////////////////////////


    //마지막 article 앞으로 가져오기
    
    for(var i=0; i<4; i++){
        $('#wrap article:last-child').prependTo('#wrap');
    };


    //슬라이드 함수
    function moveLeft(){
        $('#wrap').stop().animate({
            left: -1 * boxwidth * 4
          }, 1000, 'easeOutCirc', function(){

            for(var i = 0; i < 4; i++){
                $('#wrap article:first-child').appendTo('#wrap');
            }

            $('#wrap').css('left', '');
        });
    };

    function moveRight(){
        $('#wrap').stop().animate({
            left: boxwidth * 4
        }, 1000, 'easeOutCirc', function(){

            for(var i = 0; i < 4; i++){
                $('#wrap article:last-child').prependTo('#wrap');
            }

            $('#wrap').css('left', '');
        });
        
    };


    //버튼 클릭 시 함수 실행

    $('.nxt').on('click', function(){
        moveLeft();
    });

    $('.prv').on('click', function(){
        moveRight();
    });


    









}); //opening