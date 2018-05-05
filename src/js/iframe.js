(function() {
    var waitUntilChromeAutofocuses;

    window.addEventListener("load", (function(_this) {
        return function() {
            var iframe;
            iframe = document.querySelector("iframe");
            waitUntilChromeAutofocuses(iframe);
            iframe.src = _this.host + "/a/signin?service=chrome.google.com";
            return iframe.addEventListener("load", function() {
                return iframe.classList.add("is-loaded");
            });
        };
    })(this));

    waitUntilChromeAutofocuses = function(element) {
        return element.getBoundingClientRect().width;
    };

}).call(this);