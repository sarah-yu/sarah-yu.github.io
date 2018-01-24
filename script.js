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

	// info hover images
	let infoImage = $('.info-image')
	let ga = $('#info-ga')
	let muscat = $('#info-muscat')
	let known = $('#info-known')
	let shadows = $('#info-shadows')
	let kimchi = $('#info-kimchi')

	ga.hover(
		() => {
			infoImage.html('<img src="img/ga.png" alt="General Assembly" />')
		},
		() => {
			infoImage.html('')
		}
	)

	muscat.hover(
		() => {
			infoImage.html('<img src="img/muscat.jpg" alt="Muscat the tuxedo cat" />')
		},
		() => {
			infoImage.html('')
		}
	)

	known.hover(
		() => {
			infoImage.html(
				'<img src="img/known.jpeg" alt="Known and Strange Things by Teju Cole" />'
			)
		},
		() => {
			infoImage.html('')
		}
	)

	shadows.hover(
		() => {
			infoImage.html(
				'<img src="img/shadows.jpg" alt="What We Do in the Shadows" />'
			)
		},
		() => {
			infoImage.html('')
		}
	)

	kimchi.hover(
		() => {
			infoImage.html('<img src="img/kimchi.png" alt="kimchi" />')
		},
		() => {
			infoImage.html('')
		}
	)
})
