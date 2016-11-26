window.onload = function() {
		var elements = document.getElementsByTagName('*'),
			i;
		for (i in elements) {
			if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
				fragment(elements[i], elements[i].getAttribute('data-include'));
			}
		};
		function fragment(el, url) {
			console.log(url);
			$(el).load(url);
		};

 };