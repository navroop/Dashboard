$("#menu-toggle2").click(function(e) {
	e.preventDefault();
	$(this).hide();
	$("#menu-toggle3").show();
	$("#wrapper").addClass("toggled");
});
$("#menu-toggle3").click(function(e) {
	e.preventDefault();
	$(this).hide();
	$("#menu-toggle2").show();
	$("#wrapper").removeClass("toggled");
});
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
$(".collapsed").click(function(e) {
	e.preventDefault();
	$(this).parent().toggleClass("open");
	$(this).parent().toggleClass("active");
	$(this).toggleClass("collapsed");
	$('ul.collapse').toggleClass("in");

});
