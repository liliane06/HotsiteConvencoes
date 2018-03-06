(function($){
	$('.fechar').on('click', function(){
		$('#menu').fadeOut(299);
	});

	$('.icone-menu').on('click', function(){
		$('#menu').fadeIn(299);
	});

	window.addEventListener('load', function(){
		$('#loader').hide(299);
	});
})($)