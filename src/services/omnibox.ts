import {SearchApi} from "../api/search"

const searchSrc = "https://mulwi.com/signin?service=chrome.google.com&min=1&q="

export default class Omnibox {

    constructor() {
        chrome.omnibox.onInputChanged.addListener((text, suggest) => {
            if (text.length > 0) {
                this.updateDefaultSuggestion(text)
            } else {
                this.resetDefaultSuggestion()
            }

            this.populateSuggestions(text, suggest)
        })

        chrome.omnibox.onInputEntered.addListener(text => {
            const url = searchSrc + encodeURIComponent(text)
            chrome.tabs.create({url: url})
        })
    }

    updateDefaultSuggestion = (text: string) => {
        const description = `<url>Search Mulwi for</url><dim> [</dim><match>${text}</match><dim>]</dim>`

        chrome.omnibox.setDefaultSuggestion({
            description: description
        })
    }

    resetDefaultSuggestion = () => {
        chrome.omnibox.setDefaultSuggestion({
            description: `<url><match>Mulwi:</match></url> Search Mulwi`
        });
    }

    populateSuggestions = (text: string, suggest: any) => {
        const suggestions: chrome.omnibox.SuggestResult[] = []

        SearchApi.complete({
            name: "",
            caret: 0,
            request: {
                query: text,
            }
        }).then(response => {
            response.data.completions.forEach(completion => {
                suggestions.push({
                    content: completion.text,
                    description: completion.text
                })
            })
            suggest(suggestions)
        })

    }
}