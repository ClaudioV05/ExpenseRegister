export function daoRegisterUser(user) {
    // key value is default here (created for learning);
    window.localStorage.setItem("login1", JSON.stringify(user));
    return true;
}

export function daoReadUser(username) {
    let aux = JSON.parse(window.localStorage.getItem("login1"));

    if (username.trim() === aux.name) {
        return true;
    }
}