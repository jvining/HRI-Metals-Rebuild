// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enables Fancy Box Lightbos
Fancybox.bind("[data-fancybox]", {});


// On Scroll Effectts 
$(window).scroll(function(){
    if ($(window).scrollTop() > 100){
		$('body.front nav.navbar').addClass('on-scroll ');
		$('body.front nav.navbar').removeClass('py-md-4' );
    } else if ($(window).scrollTop() < 100){
		$('body.front nav.navbar').removeClass('on-scroll' );
		$('body.front nav.navbar').addClass('py-md-4' );
    }
});