var $start_menu = $(".start-menu");
$start_menu.hide();
var $start_content_area = $start_menu.find(".all-kinds-of-thing-container");
var $start_content_default = $start_menu.find(".all-kinds-of-thing-start-content");
var $windows_cant_do_it_you_can = $start_menu.find(".windows-cant-do-it-you-can");
var $start_a_program = $start_menu.find(".start-a-program");

var reset_to_start_of_start = function(){
	$start_content_area.html("").append($start_content_default);
};
var open_start_menu = function(){
	reset_to_start_of_start();
	$start_menu.attr("hidden", null);
	$start_menu.slideDown(100);
};
var close_start_menu = function(){
	$start_button.removeClass("selected");
	$start_menu.attr("hidden", "hidden");
	$start_menu.hide();
};
var toggle_start_menu = function(){
	if($start_menu.is(":hidden")){
		open_start_menu();
	}else{
		close_start_menu();
	}
};

var $start_button = $(".start-button");
$start_button.on("pointerdown", function(){
	toggle_start_menu();
});

$("body").on("pointerdown", function(e){
	if($(e.target).closest(".start-menu, .start-button").length === 0){
		close_start_menu();
	}
});
