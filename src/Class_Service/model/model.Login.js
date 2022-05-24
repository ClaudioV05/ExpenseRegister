import { daoRegisterUser, daoReadUser } from "../dao/dao.Login.js";

class Username {
    constructor(_name, _password, _active) {
        this.name = _name;
        this.password = _password;
        this.active = _active;
    }

    validFields() {
        for (let property in this) {
            if (this[property] == '' || this[property] == null || this[property] == undefined) {
                return false;
            }
        }
        return true;
    }
}

export function modelRegisterUser(...user) {

    let username = new Username(...user);
    return daoRegisterUser(username);
}

export function modelReadUser(username) {
    return daoReadUser(username);
}