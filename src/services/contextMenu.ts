export default class ContextMenu {
    constructor() {
        chrome.contextMenus.create({
            title: "Search on Mulwi",
            contexts: ["page"],
            onclick: (_, tab) => {
                this.handleSelection("", tab)
            }
        });

        chrome.contextMenus.create({
            title: "Search for '%s'",
            contexts: ["selection"],
            onclick: (info, tab) => {
                if (info.selectionText) {
                    const text = info.selectionText
                    // text = text.split(/\s+\b/).length > 1 ? "'" + text + "'" : text

                    this.handleSelection(text, tab)
                }

            }
        })
    }

    handleSelection = (text: string, tab: chrome.tabs.Tab) => {
        if (tab.id) {
            chrome.tabs.executeScript(tab.id, {
                code: "window.$content.show();",
            })
            const task = {
                task: "set",
                data: {
                    query: text,
                },
            }
            chrome.tabs.executeScript(tab.id, {
                code: `window.$content.set('${JSON.stringify(task)}');`,
            })
        }
    }
}