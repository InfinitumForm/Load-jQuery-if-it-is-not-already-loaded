/**
	 * Define jQuery if is not already defined
	 *
	 * @autor    Ivijan-Sefan Stipic
	 * @version  1.0.0
	**/
	(function(url, position, callback){
		// Check is jQuery exists
		if (!window.jQuery) {
			// Initialize <head>
			var head = document.getElementsByTagName('head')[0];
			// Create <script> element
			var script = document.createElement("script");
			// Append URL
			script.src = url;
			// Append type
			script.type = 'text/javascript';
			// Append script to <head>
			head.appendChild(script);
			// Move script on proper position
			head.insertBefore(script,head.childNodes[position]);

			script.onload = function(){
				if(typeof callback == 'function') {
					callback(jQuery);
				}
			};
		} else {
			if(typeof callback == 'function') {
				callback(jQuery);
			}
		}
	}('[CUSTOM URL]', 0));
