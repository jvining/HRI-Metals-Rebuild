// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enables Fancy Box Lightbos
Fancybox.bind("[data-fancybox]", {});


// On Scroll Effectts 
$(window).scroll(function(){
    if ($(window).scrollTop() > 100){
		$('body nav.navbar').addClass('on-scroll ');
		$('body nav.navbar').removeClass('py-md-3' );
    } else if ($(window).scrollTop() < 100){
		$('body nav.navbar').removeClass('on-scroll' );
		$('body nav.navbar').addClass('py-md-3' );
    }
});