"use strict";

// const appRoot = require("app-root-path");
// const logger = require(`${appRoot}/src/config/logger`);

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    confirmpw = document.querySelector("#confirm-pw"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("no id");
    if (pw.value != confirmpw.value) return alert("different password");

    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                if(res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            logger.error(`${PORT} ${err} : signup error`);
        })
}