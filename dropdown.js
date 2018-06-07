$(".submenu").click(function () {
	$(this).children("ul").slideToggle();
})
$("li").click(function(m){
	m.stopPropagation();
})
$("ul").click(function(p){
	p.stopPropagation();
})