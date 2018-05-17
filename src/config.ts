/*
  To change which server is used, edit local storage for the extension
  and set the "host" key.
 */

(function () {
    var defaultHost, savedHost;

    defaultHost = "https://mulwi.com";

    savedHost = localStorage.getItem("host");

    this.host = (savedHost || defaultHost).replace(/\/$/, "");

    localStorage.setItem("host", this.host);

    chrome.browserAction.setBadgeText({
        text: this.host === defaultHost ? "" : this.host.match(/\.dev/i) ? "local" : "stage"
    });

}).call(this);