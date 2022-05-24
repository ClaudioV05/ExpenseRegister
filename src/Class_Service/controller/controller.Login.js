import { modelRegisterUser, modelReadUser } from "../model/model.Login.js";

export function controllerRegisterUser(...user) {
    return modelRegisterUser(...user);
}

export function controllerReadUser(username) {
    return modelReadUser(username);
}