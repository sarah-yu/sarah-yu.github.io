$('document').ready(() => {
	// project image hover
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

	// open and close contact
	let contactOpenClose = $('.contact-open-close')
	let overlay = $('.overlay')
	let main = $('main')

	contactOpenClose.on('click', e => {
		e.preventDefault()

		overlay.fadeToggle(400)
		main.toggleClass('hide-main')
	})
})
