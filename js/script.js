$(document).ready(function () {
	const header = $('#header-title');
	const headerHomeSpan = $('#header-title > a');
	let sticky = header.offset().top;

	const animateScrolling = function (elementToScroll, event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(elementToScroll).offset().top
		}, {
			easing: 'swing',
			duration: 1000
		});
	};

	$('.scroll-down').click(function (event) {
		animateScrolling($('#home'), event);
	});

	$('a[href^="#"]').click(function (event) {
		let elementToScroll = $(this).attr('href');
		animateScrolling($(this).attr('href'), event);
	});

	$(window).resize(function () {
		sticky = ($(window).height() - header.height()) / 2;
	});

	const classListBeforeScroll = 'margin-auto display-1';
	const classListAfterScroll = 'fixed-top display-4';

	$(window).scroll(function () {
		if ($(window).scrollTop() > sticky) {
			header.removeClass(classListBeforeScroll);
			header.addClass(classListAfterScroll);
		} else {
			header.removeClass(classListAfterScroll);
			header.addClass(classListBeforeScroll);
		}
	});
});
