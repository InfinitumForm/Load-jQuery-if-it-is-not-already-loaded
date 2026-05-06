(function (url, position, callback) {
	'use strict';

	var head;
	var script;
	var referenceNode;

	url = url || 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
	position = Number.isInteger(position) ? position : 0;

	if (window.jQuery) {
		if (typeof callback === 'function') {
			callback(window.jQuery);
		}

		return;
	}

	head = document.head || document.getElementsByTagName('head')[0];

	if (!head) {
		return;
	}

	script = document.createElement('script');
	script.src = url;
	script.type = 'text/javascript';
	script.async = true;

	script.onload = function () {
		if (window.jQuery && typeof callback === 'function') {
			callback(window.jQuery);
		}
	};

	script.onerror = function () {
		if (window.console && typeof window.console.error === 'function') {
			window.console.error('Failed to load jQuery from: ' + url);
		}
	};

	referenceNode = head.childNodes[position] || null;
	head.insertBefore(script, referenceNode);
}(
	'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
	0,
	function ($) {
		'use strict';

		// Your jQuery code here.
		console.log($.fn.jquery);
	}
));
