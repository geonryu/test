$(document).ready(function(){

    //scrolling
    
    var boxwidth = $('article').width();
    var boxheight = $('article').height();
    var countBox = $('article').length;
    var totalwidth = boxwidth * countBox + 5 * countBox -5 + 320;
    
    
	$('#wrap').width(totalwidth);
	$('body').height(totalwidth);	
    
	$('html, body').animate({
        "scrollTop": totalwidth - (boxwidth * 5)
    },1000);	

    var scroll = $(this).scrollTop();


    $(window).on('scroll',function(){
		var scroll = $(this).scrollTop();		
		$('#wrap').stop().animate({'left':-scroll},300);  
    });




    //pager click

    $('.prv').on('click', function(){
        
        $('html,body').stop().animate({
            'scrollTop' : 320
        });

    });

    $('.nxt').on('click', function(){

        $('html,body').stop().animate({
            'scrollTop' : -320
        });
        
    });


    console.log(boxwidth);
    
});//opening