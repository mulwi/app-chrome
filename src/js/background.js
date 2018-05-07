var searchSrc = "https://mulwi.com/singin/?q=";

chrome.omnibox.onInputEntered.addListener(
    function (text) {
        var url = searchSrc + encodeURIComponent(text);
        chrome.tabs.create({url: url});
    }
);

chrome.browserAction.onClicked.addListener(function (a) {
    var b = a.id;
    chrome.tabs.executeScript(b, {
        code: "window.__Mulwi.toggle()",
    })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var d = changeInfo.url || tab.url || !1;
    d && ((/^chrome\-extension:\/\//.test(d) || /^chrome:\/\//.test(d)) && chrome.browserAction.setPopup({
        tabId: tabId,
        popup: "popup.html#local"
    }), /^https:\/\/chrome\.google\.com\/webstore\//.test(d) && chrome.browserAction.setPopup({
        tabId: tabId,
        popup: "popup.html#webstore"
    }))
});