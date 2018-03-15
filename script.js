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

	$('#murakami-img').mouseenter(function() {
		$(this).attr('src', 'img/murakami-hover.png')
	})
	$('#murakami-img').mouseleave(function() {
		$(this).attr('src', 'img/murakami.png')
	})

	$('#piece-peace-img').mouseenter(function() {
		$(this).attr('src', 'img/piece-peace-hover.png')
	})
	$('#piece-peace-img').mouseleave(function() {
		$(this).attr('src', 'img/piece-peace.png')
	})

	$('#cool-beans-img').mouseenter(function() {
		$(this).attr('src', 'img/cool-beans-hover.gif')
	})
	$('#cool-beans-img').mouseleave(function() {
		$(this).attr('src', 'img/cool-beans.png')
	})

	// open and close contact
	let contactOpenClose = $('.contact-open-close')
	let overlay = $('.overlay')

	contactOpenClose.on('click', e => {
		e.preventDefault()

		overlay.fadeToggle(400)
	})
})
