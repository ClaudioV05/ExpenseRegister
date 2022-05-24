import { routes } from "./controller.Routes.js";
import { emailSocial, nameSocial } from "../../utils/varGlobais.js";
import { controllerRegisterUser, controllerReadUser } from "./controller.Login.js";

const btnRegisterUser = document.getElementById("btnRegisterUser");

if ((btnRegisterUser != null)) {
    btnRegisterUser.addEventListener("click", () => registerUser());
}

document.addEventListener("keypress", (event) => (event.key === "Enter") ? registerUser() : false);

function registerUser() {
    let username = document.getElementById("username").value,
        password = document.getElementById("password").value;


    if (username != "" && password != "") {
        if (!readUser(username)) {

            let aux = [];
            aux.push(username);
            aux.push(password);
            aux.push(true);

            try {
                controllerRegisterUser(...aux);
            } catch (error) {
                alert(` Entre em contato com o suporte da ${nameSocial} \n email: ${emailSocial}
                \n\n ${error}`);
            }
        }
        readUser(username);
    }
}

function readUser(username) {
    if (controllerReadUser(username)) {
        routes("routeRegister");
    }
}