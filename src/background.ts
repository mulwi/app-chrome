import Omnibox from "./services/omnibox"
import ContextMenu from "./services/contextMenu"

new Omnibox()
new ContextMenu()

chrome.browserAction.onClicked.addListener(function (a) {
    const b = a.id as number
    chrome.tabs.executeScript(b, {
        code: "window.$content.toggle()",
    })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    const d = changeInfo.url || tab.url || !1
    d && ((/^chrome\-extension:\/\//.test(d) || /^chrome:\/\//.test(d)) && chrome.browserAction.setPopup({
        tabId: tabId,
        popup: "popup.html#local"
    }), /^https:\/\/chrome\.google\.com\/webstore\//.test(d) && chrome.browserAction.setPopup({
        tabId: tabId,
        popup: "popup.html#webstore"
    }))
});

// document.addEventListener('mulwiLoaderComplete', function(e) {
//     console.log(e)
//     console.log((e as any).detail)
//     console.log((e as any).window.$mulwi)
// })

