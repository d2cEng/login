"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);

            if (user) {
                if (user.id === client.id && user.pw === client.pw) {
                    return { success: true };
                }
                return { success: false, msg: "Wrong Password" };
            }
            return { success: false, msg: "No ID exist" };
        } catch (err) {
            return { success: false, err };
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User;