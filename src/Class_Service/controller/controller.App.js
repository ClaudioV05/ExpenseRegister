import { routes } from "./controller.Routes.js";
import { controllerRegisterService, controllerListService } from "./controller.Service.js";
import { loadElements, checkLeapTear } from "./controller.UtilsHtml.js";

// Mouse.
const routeRegister = document.getElementById("routeRegister");
const routeQuery = document.getElementById("routeQuery");
const btnRegisterService = document.getElementById("btnRegisterService");
const selectMounth = document.getElementById("mouth");

// Key.
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        registerService();
    };
});

if (routeRegister != null) {
    routeRegister.addEventListener("click", () => routes("routeRegister"));
    loadFormatElements("routeRegister");
}

if (routeQuery != null) {
    routeQuery.addEventListener("click", () => routes("routeQuery"));
    loadFormatElements("routeQuery");

    if ((selectMounth != null)) {
        btnRegisterService.addEventListener("click", () => {
            checkLeapTear();
        });
    };
}

if ((btnRegisterService != null)) {
    btnRegisterService.addEventListener("click", () => {
        registerService();
    });
}

function registerService() {
    let aux = [];
    aux.push(document.getElementById("year").value);
    aux.push(document.getElementById("mouth").value);
    aux.push(document.getElementById("day").value);
    aux.push(document.getElementById("typeService").value);
    aux.push(document.getElementById("descriptionService").value);
    aux.push(document.getElementById("valueService").value);

    try {
        if (controllerRegisterService(...aux)) {
            routes("routeQuery");
        };

    } catch (error) {
        alert(`Erro ao cadastrar novo serviço. \n\n ${error}`);
    }
}

function loadFormatElements(page) {
    let softwareHouseName = "CV5 Software";

    try {
        loadElements(page, controllerListService());
    } catch (error) {
        alert(` Entre em contato com o suporte da ${softwareHouseName} \n email: claudiomildo@gmail.com
        \n\n ${error}`);
    };
}