$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:6000,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$(document).ready(function () {
        
	$('.first-button').on('click', function () {
	
	  $('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {
	
	  $('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {
	
	  $('.animated-icon3').toggleClass('open');
	});
	
	});
