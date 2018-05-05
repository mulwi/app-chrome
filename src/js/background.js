var searchSrc = "https://mulwi.com/singin/?q=";

chrome.omnibox.onInputEntered.addListener(
    function (text) {
        var url = searchSrc + encodeURIComponent(text);
        chrome.tabs.create({url: url});
    }
);

