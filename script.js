$('document').ready(() => {
	$('#simon-img').mouseenter(function() {
		$(this).attr('src', 'img/simon.gif')
	})
	$('#simon-img').mouseleave(function() {
		$(this).attr('src', 'img/simon.png')
	})

	$('#winona-img').mouseenter(function() {
		$(this).attr('src', 'img/winona.gif')
	})
	$('#winona-img').mouseleave(function() {
		$(this).attr('src', 'img/winona.png')
	})
})
