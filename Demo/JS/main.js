// MAIN
$(function(){
	// Toggle mobile navbar links
	$(document).on("click", "#nav_menu_btn", function () {
		$(".navbar").removeClass("autohide");
		$("#nav_grid").toggleClass("show-links");
		setTimeout(function () {
			$(".navbar").addClass("autohide");
		}, 50);
	});
});