// MAIN
$(function(){
	// Global vars (somewhat)
	lastScrollTop = 0;
	mobile_width = 650;

	// smooth scroll
	$(document).on('click', 'a[href^="#"]', function (e) {
		// prevent url change
		e.preventDefault();
		
		var nav_offset;
		var anchor_offset = $($(this).attr('href')).offset().top;

		// set navbar offset
		if ($(".navbar").hasClass("autohide")) { // if autohide
			if (anchor_offset < $(window).scrollTop() || $(".navbar-layout").hasClass("show-links")) { // if scrolling up or mobile navbar open
				nav_offset = $(".navbar").outerHeight() + 10;
			} else { // if scrolling down
				nav_offset = 10;
			}
		} else { // if not autohide
			nav_offset = $(".navbar").outerHeight() + 10;
		}

		// animate scroll
		$('html, body').stop().animate({
			scrollTop: anchor_offset - nav_offset
		}, 100);
	});

	// On scroll 
	$(window).on("scroll", function () {
		var st = $(this).scrollTop();
		var limit = document.getElementById("navbar_hidepoint");
		var mobile_navbar_open = $(".navbar-layout").hasClass("show-links");
		var past_limit = ($(limit).length && st > limit.offsetTop) || (!$(limit).length && st > $(".navbar").outerHeight());

		// autohide navbar
		if (st > lastScrollTop && past_limit && !mobile_navbar_open){
			if (!$(".navbar-layout").hasClass("show-links")) {
				$(".navbar.autohide").addClass("hide");
			}
		} else {
			$(".navbar.autohide").removeClass("hide");
		}
		
		// update last scroll
		lastScrollTop = st;
	});

	// On resize
	$(window).on("resize", function () {
		if ($(window).width() > mobile_width) {
			$(".navbar-layout").removeClass("show-links")
		}
	});

	// Toggle mobile navbar links
	$(document).on("click", ".nav-menu-btn", function () {
		$(".navbar-layout").toggleClass("show-links");
	});
});