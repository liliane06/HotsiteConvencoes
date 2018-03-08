(function($){

	// slicks
	$('#bannersInfra, #bannersGalery').slick({
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		dots: true,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false
	  });

	// deixar com 100 de altura
	function maxHeight(el){
		$(el).css('minHeight', $(window).height());
	}
	$('.fechar').on('click', function(){

		$('#menu').fadeOut(299);
	});

	$('.icone-menu').on('click', function(){
		$('#menu').fadeIn(299);
	});

	$('#icone-interrogacao').on('click', function(){
		$('.popLeft').fadeToggle(299);
	});

	window.addEventListener('load', function(){
		$('#loader').slideUp(1000);
		maxHeight($('#wrraper'))
	});
	window.addEventListener('resize', function(){
		maxHeight($('#wrraper'))
	});

	
})($)