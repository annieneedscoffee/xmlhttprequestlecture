var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
	if (xhr.status !== 200) {
		return;
	}

	var data = JSON.parse(xhr.responseText);

	console.log(data);
});

xhr.open('GET', 'http://pokeapi.co/api/v2/region/1/');

xhr.send();
