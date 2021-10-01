import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// CODELAB: Register service worker.
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        const URLPATH = window.location.hostname === "localhost" ? "../service-worker.js" : "/resume/service-worker.js";

        // 저장소에 올릴 떄
        navigator.serviceWorker
            .register(URLPATH)
            .then((reg) => {
                console.log("%c Service worker registered.", "color: sky", reg);
            })
            .catch(function (err) {
                console.log("%c Service worker registration failed : ", "color: red", err);
            });
    });
}
