$(document).ready(function() {
	$('.form').submit(function(event) {
		if ($('#confirm_id:checked').length == 0) {
			$('.confirm label').css('color', '#dc0000');
			return false;
		}
		else return true;
	})
	
	$('#confirm_id').change(function(){
		$('.confirm label').css('color', '');
		if ($(this).is(':checked')) {
			$('input[type=submit]').addClass('valid-btn')
		} else {
			$('input[type=submit]').removeClass('valid-btn')
		}
		
	})
})