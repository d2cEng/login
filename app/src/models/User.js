"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id, pw } = UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && pw === client.pw) {
                return { success: true };
            }
            return { success: false, msg: "Wrong Password" };
        }
        return { success: false, msg: "No ID exist" };
    }

    register(){
        const client = this.body;
        UserStorage.save(client);
    
    }
}

module.exports = User;