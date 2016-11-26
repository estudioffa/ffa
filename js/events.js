addSettings();

function addSettings() {
	if (location.href.indexOf("index") > -1) $('.sf-menu li:nth-child(1)').children().addClass('active');
	if (location.href.indexOf("work") > -1) $('.sf-menu li:nth-child(2)').children().addClass('active');
	if (location.href.indexOf("services") > -1) $('.sf-menu li:nth-child(3)').children().addClass('active');
	if (location.href.indexOf("about") > -1) $('.sf-menu li:nth-child(4)').children().addClass('active');
	if (location.href.indexOf("contact") > -1) $('.sf-menu li:nth-child(5)').children().addClass('active');
};

$('.canvas-logo').click( function() {

	 
	$(this).animate({
		opacity: 1.0 ,
		left: '100px'
		 
	}, 1000, setvisible);
	 
	$(this).animate({
		opacity: 0.0,
		left: '50%'
	}, 1000, setInvisible);

});


function setInvisible() {
	$('.canvas-logo').css('visibility', 'hidden');
	 

};

function setvisible() {
	  
	$('.container, .carousel-control, .navbar').css('visibility', 'visible');
	$('footer, .services').removeClass('hidden');
	

};

 