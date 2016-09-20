$(document).ready(function() {
	
	var storage = window.localStorage;

	for (var i in storage) {
		$('#tasks').prepend('<li class="item">' + storage[i]  + '</li>');
	}

	$('.add').on('click', function() {
		var task = $('input[name="title"]');

		if (task.val()) {
			$('#tasks').prepend('<li class="item">' + task.val() + '</li>');
			storage.setItem(new Date().toTimeString(), task.val());
			task.val('');
		}
	});
});
