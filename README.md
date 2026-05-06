# Load jQuery Safely (Only If Missing)

Lightweight JavaScript utility for conditionally loading jQuery only when it is not already available on the page.

Prevents duplicate loads, avoids conflicts, and guarantees a safe initialization point via callback.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V7V11XGEKH)

---

## Why use this?

- Eliminates duplicate jQuery loading
- Works with any CDN or self-hosted version
- Safe fallback when jQuery is not present
- Provides reliable callback when jQuery is ready
- Zero dependencies

---

## Usage

Add this script anywhere in your HTML (recommended: end of `<head>` or before `</body>`):

```html
<script type="text/javascript">
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
        console.error('Failed to load jQuery from: ' + url);
    };

    referenceNode = head.childNodes[position] || null;
    head.insertBefore(script, referenceNode);
}(
    'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    0,
    function ($) {
        console.log('jQuery loaded:', $.fn.jquery);
    }
));
</script>
```

---

## Parameters

| Parameter | Type     | Description |
|----------|----------|------------|
| `url`     | string   | URL to jQuery (CDN or local). Default: Google CDN (3.7.1) |
| `position`| integer  | Index position inside `<head>` where script is inserted |
| `callback`| function | Optional callback executed when jQuery is ready |

---

## How it works

1. Checks if `window.jQuery` already exists
2. If exists → immediately executes callback
3. If not → dynamically injects `<script>` into `<head>`
4. Waits for `onload`
5. Executes callback with jQuery instance

---

## Notes

- Callback is optional but recommended for safe execution
- Safe to include multiple times (will not reload jQuery if already present)
- Works across modern browsers

---

## License

MIT
