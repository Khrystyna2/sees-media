$(document).ready(function() {
	// menu
	function openSubMenuOnHover() {
		$(".menu__item").hover(
			function() {
				$(this)
					.find(".menu__dropdown")
					.stop(true, true)
					.delay(200)
					.fadeIn();
			},
			function() {
				$(this)
					.find(".menu__dropdown")
					.stop(true, true)
					.delay(200)
					.fadeOut();
			}
		);
	}

	function openSubMenuOnClick() {
		$(".menu__open-dropdown").click(function(e) {
			e.preventDefault();
			// $(".menu__open-dropdown").removeClass("rotate");
			$(this)
				.toggleClass("rotate")
				.next(".menu__dropdown")
				.slideToggle();
		});
	}

	if ($(window).width() >= 992) {
		openSubMenuOnHover();
		// console.log(openSubMenuOnHover(), "onHover");
	} else {
		openSubMenuOnClick();
		// console.log(openSubMenuOnClick(), "onClick");
	}

	// $(window).resize(function() {
	// 	if ($(window).width() >= 992) {
	// 		console.log(openSubMenuOnHover(), "onHover");
	// 	} else {
	// 		console.log(openSubMenuOnClick(), "onClick");
	// 	}
	// });

	$(".menu__btn").on("click", function() {
		$(this).toggleClass("active");
		$(".menu").toggleClass("open");
		$(".menu__dropdown").slideUp();
		$(".menu__open-dropdown").removeClass("rotate");
		$("body").toggleClass("overflow-hidden");
	});

	$(".slider").slick({
		arrows: false,
		dots: true,
		// autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// open modal window
	$(".open-pop-up").click(function(e) {
		e.preventDefault();
		let dataTarget = $(this).attr("data-target");
		if ($(this).attr("data-target")) {
			$(dataTarget)
				.fadeIn(400)
				.addClass("show");
			$("body").addClass("overflow-hidden");
		}
	});

	// close modal window
	$(".modal-window__close, .modal-window__content").click(function(e) {
		e.preventDefault();
		$(".modal-window")
			.fadeOut(400)
			.removeClass("show");
		$("body").removeClass("overflow-hidden");
	});

	$(".modal-window__body").click(function(e) {
		e.stopPropagation();
	});

	// accordion
	$(".accordion__header").click(function() {
		// $(".accordion__header img").removeClass("rotate");
		// $(".accordion__body").slideUp();
		$(this)
			.find("img")
			.toggleClass("rotate");
		$(this)
			.next("article")
			.slideToggle();
		$(this)
			.closest("li")
			.siblings("li")
			.find("img")
			.removeClass("rotate");
		$(this)
			.closest("li")
			.siblings("li")
			.find("article")
			.slideUp();
	});
});
