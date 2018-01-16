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

	let muscatLink = $('.muscat-link')
	let muscatImage = $('.muscat-image')

	muscatLink.hover(
		function() {
			muscatImage.addClass('muscat-image-show')
		},
		function() {
			muscatImage.removeClass('muscat-image-show')
		}
	)

	let contactOpenClose = $('.contact-open-close')
	let overlay = $('.overlay')
	let main = $('.main')

	contactOpenClose.on('click', e => {
		e.preventDefault()

		// $('body').toggleClass('is-active')
		overlay.fadeToggle(400)
		main.toggleClass('hide-main')
	})
})
