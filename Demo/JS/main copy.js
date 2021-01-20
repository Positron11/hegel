// MAIN
$(function(){
	// Initialize page
	columnizeNavLinks();
	
	// On resize
	$(window).on("resize", function () {
		columnizeNavLinks();
	});
});


// COLUMNIZE NAV LINKS CONTAINER
function columnizeNavLinks() {
	if ($(window).width() <= 650) {
		$(".navbar-layout .nav-links-container .list-box").addClass("column");
	} else {
		$(".navbar-layout .nav-links-container .list-box").removeClass("column");
	}
}