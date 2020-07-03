$(document).ready(function () {
	$('a[href^="#"]').on('click', function (event) {
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			easing: 'swing',
			duration: 1000
		});
		event.preventDefault();
	});

	const header = $('#header-title');
	let sticky = header.offset().top;

	$(window).resize(function () {
		sticky = header.offset().top;
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > sticky) {
			header.addClass("fixed-top bg-primary");
			header.removeClass("col");
		} else {
			header.removeClass("fixed-top bg-primary");
			header.addClass("col");

		}
	});
});
