"use strict";

class UserStorage {
    static #user = {
        id: ["woo", "rim", "IT"],
        pw: ["123", "234", "345"],
        name: ["wori", "mi", "de"],
    };

    static getUser(...fields) {
        const users = this.#user;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
}

module.exports = UserStorage;