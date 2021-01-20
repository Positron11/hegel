// MAIN
$(function(){
	// Global vars (somewhat)
	lastScrollTop = 0;

	
	// Smooth scroll
	$(document).on('click', 'a[href^="#"]', function (e) {
		// prevent url change
		e.preventDefault();
		
		var nav_offset;
		var anchor_offset = $($(this).attr('href')).offset().top;

		// set navbar offset
		if ($(".navbar").hasClass("autohide")) { // if autohide
			if (anchor_offset < $(window).scrollTop()) { // if scrolling up
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
		var past_limit = ($(limit).length && st > limit.offsetTop) || (!$(limit).length && st > $(".navbar").outerHeight());

		// autohide navbar
		if (st > lastScrollTop && past_limit) { // scroll down
			$(".navbar.autohide").addClass("hide");
		} else { // scroll up
			$(".navbar.autohide").removeClass("hide");
		}
		
		// update last scroll
		lastScrollTop = st;
	});
});