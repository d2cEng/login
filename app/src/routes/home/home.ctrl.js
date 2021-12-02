"use strict";

const user = {
    id: ["woo", "rim", "IT"],
    pw: ["123", "234", "345"],
};

const output = {
    home: (req, res) => {
        res.render("home/home");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
         pw = req.body.pw;

        if (user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if (user.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "Login Failure",
        });
    }
};


module.exports = {
    output,
    process,
};