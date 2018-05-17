class Content {
    constructor() {
        const script = document.createElement("script")
        script.async = true
        script.src = "https://mirasvit.mulwi.com/search/loader.js"
        script.dataset.mulwi = JSON.stringify({
            baseURL: "https://mulwi.com",
            display: "iframe",
        })
        document.getElementsByTagName('head')[0].appendChild(script)
    }

    toggle = () => {
        this.run("toggle", "")
    }

    show = () => {
        this.run("show", "")
    }

    hide = () => {
        this.run("hide", "")
    }

    set = (args: string) => {
        this.run("send", args)
    }

    private run = (task: string, args: string) => {
        const action = document.createElement("script")
        action.id = "action"
        action.innerText = `window.$mulwi.${task}(${args});`
        document.body.appendChild(action)
    }
}

(window as any).$content = new Content()