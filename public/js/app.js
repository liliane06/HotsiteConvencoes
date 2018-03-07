(function($){

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

	window.addEventListener('load', function(){
		$('#loader').slideUp(299);
		maxHeight($('#wrraper'))
	});
	window.addEventListener('resize', function(){
		maxHeight($('#wrraper'))
	});
})($)