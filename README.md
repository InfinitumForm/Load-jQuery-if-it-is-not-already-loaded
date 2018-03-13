# Load jQuery if it is not already loaded
Best solution to load jQuery if is not already loaded.
### How this work
```
<script type="text/javascript">
	(function(url, position, callback){
		// default values
		url = url || 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
		position = position || 0;
		
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
	}('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', 5, function($){ 
		console.log($);
	}));
</script>
```

This function you can add anywhere in your HTML code (the best is on end of `<head>` or before `</body>`) and you don't need to warry is jquery already loaded or not. Generaly this function check is jQuery loaded and if is not it append jQuery library into your DOM and initialize it.

Function accept 2 arguments:

1. url - jQuery custom URL, can be hosted library or some CDN URL (Default is setup to version 3.3.1)
2. position - position offset (integer) where you want to push your jQuery code (Default is 0 - first line of `<head>`)

Function also return callback what you can define with `$` to initialize jQuery. Callback is not important and you can avoid it.

NOTE: It can happen that yu see in console some errors like `Uncaught ReferenceError: jQuery is not defined` or `Uncaught ReferenceError: $ is not defined` but jQuery should work fine when this function append code into your DOM.

This is still on testing phase but you can comment and report issue if you find.

Also you can involve into development and help me to build best solution for all.
