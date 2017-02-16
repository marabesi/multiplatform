$(document).ready(function() {
	
	var storage = window.localStorage;

	for (var i in storage) {
		$('#contacts').prepend('<li class="item">' + storage[i]  + '</li>');
	}

	$('.add').on('click', function() {
		var name = $('input[name="name"]');
		var email = $('input[name="email"]');

		if (name.val()) {
			$('#contacts').prepend('<li class="item">' + name.val() + '</li>');

			var toStore = {
				name: name.val(),
				email: email.val()
			};

			storage.setItem(new Date().toTimeString(), JSON.stringify(toStore));

			name.val('');
			email.val('');
		}
	});
});
