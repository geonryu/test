$(document).ready(function(){
    //mouse over & out

    var boxwidth = $('article').width();
    var boxheight = $('article').height();
    var countBox = $('article').length;
    var totalwidth = boxwidth * countBox + 5 * countBox -5 + 320;


    $('article').on('mouseover', function(){

        $('article').removeClass('on');
        $(this).addClass('on');
        $('#wrap').css({
            'width' : totalwidth
        });

        var indexAtc = $(this).index();
        // $('html, body').scrollTop(indexAtc * boxwidth-12);

    }).on('mouseout', function(){

        $('article').removeClass('on')

    });



    //test
    $('.cover span').on('click', function(){
        $('article').removeClass('active');
        $(this).parents('article').addClass('active');
        $(this).parent().css({'display' : 'none'});

        // var offsetLeft = $('article.acitve').position().left;
        // var winWidth = $(window).width();

        // if(offsetLeft < winWidth){
        //     $('html, body').animate({
        //         'scrollTop' : 300
        //     });
        // }else{
        //     $('html, body').animate({
        //         'scrollTop' : -300
        //     });
        // };

    });

    // var offsetLeft = $('article.acitve').offset().left
    // console.log(offsetLeft)

    // var winWidth = $(window).width();
    // console.log(winWidth);

    // $('section').on('click', function(){
    //     $('article').removeClass('active');
    // });


});//opening