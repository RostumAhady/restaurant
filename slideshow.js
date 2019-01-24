var new_effect;
var old_effect;

function random_effect() {
	return Math.floor(Math.random() * 4) + 1;
}

$(function() {
  
  new_effect = random_effect();
  $('#slide-1').addClass('scale');
  $('#slide-1').addClass('fx' + new_effect);
  
	$('.cycle-slideshow').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
		old_effect = new_effect;
		new_effect = random_effect();
		$(incomingSlideEl).addClass('scale');
		$(incomingSlideEl).addClass('fx' + new_effect);
	});
	
	$('.cycle-slideshow').on('cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
		$(outgoingSlideEl).removeClass('scale');
		$(outgoingSlideEl).removeClass('fx' + old_effect);
	});
});