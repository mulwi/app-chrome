window.__Mulwi = {
    enabled: false,

    toggle: function () {
        if (!this.enabled) {

            if (document.getElementById("mulwi")) {
                document.getElementById("mulwi").className = "mulwi-container show";
            } else {

                var style = document.createElement("link");
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.href = "https://mirasvit.mulwi.com/search/loader.css";
                document.getElementsByTagName('head')[0].appendChild(style);

                var container = document.createElement("div");
                container.id = "mulwi";
                container.className = "mulwi-container show";

                var iframe = document.createElement("iframe");
                iframe.src = "https://mulwi.com/signin?service=chrome.google.com&min=1";

                container.appendChild(iframe);

                document.getElementsByTagName('body')[0].appendChild(container);
            }
            this.enabled = true;
        } else {
            document.getElementById("mulwi").className = "mulwi-container";
            this.enabled = false;
        }
    }
};