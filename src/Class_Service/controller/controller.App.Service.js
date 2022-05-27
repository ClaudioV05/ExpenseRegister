import { routes } from "./controller.Routes.js";
import { emailSocial, nameSocial } from "../../utils/varGlobais.js";
import { controllerRegisterService, controllerListService, controllerDeleteService } from "./controller.Service.js";
import { loadElements, checkLeapTear, modalDelete, modalRegister } from "./controller.UtilsHtml.js";

const route = document.getElementById("route");
const routeOut = document.getElementById("routeOut");
const selectMounth = document.getElementById("mouth");
const btnRegisterService = document.getElementById("btnRegisterService");
const btnViewModalCancel = document.getElementById("viewModalCancel");
const btnViewModalConfirm = document.getElementById("viewModalConfirm");
const btnSearch = document.getElementById("btnSearch");
const btnRefresh = document.getElementById("btnRefresh");

switch (route.value) {
    case 1:
        loadFormatElements("routeRegister", false, []);
        route.addEventListener("click", () => routes("routeQuery"));
        document.addEventListener("keypress", (event) => (event.key === "Enter") ? registerService() : false);
        break;
    case 2:
        loadFormatElements("routeQuery", false, []);
        route.addEventListener("click", () => routes("routeRegister"));
        break;
}

routeOut.addEventListener("click", () => routes("routeOutSection"));

selectMounth.addEventListener("click", () => checkLeapTear());

if (btnRegisterService !== null) {
    btnRegisterService.addEventListener("click", () => registerService());
}

function loadService(action = String) {
    let service = [];

    if ((document.getElementById("year").value !== "null") && (action === "filter")) {
        service['year'] = document.getElementById("year").value;
    } else {
        service.push(document.getElementById("year").value);
    }

    if ((document.getElementById("mouth").value !== "null") && (action === "filter")) {
        service['mouth'] = document.getElementById("mouth").value;
    } else {
        service.push(document.getElementById("mouth").value);
    }

    if ((document.getElementById("day").value !== "null") && (action === "filter")) {
        service['day'] = document.getElementById("day").value;
    } else {
        service.push(document.getElementById("day").value);
    }

    if ((document.getElementById("typeService").value !== "null") && (action === "filter")) {
        service['typeService'] = document.getElementById("typeService").value;
    } else {
        service.push(document.getElementById("typeService").value);
    }

    if ((document.getElementById("descriptionService").value !== "null") && (action === "filter")) {
        service['descriptionService'] = document.getElementById("descriptionService").value;
    } else {
        service.push(document.getElementById("descriptionService").value);
    }

    if ((document.getElementById("valueService").value !== "null") && (action === "filter")) {
        service['valueService'] = document.getElementById("valueService").value;
    } else {
        service.push(document.getElementById("valueService").value);
    }

    switch (action) {
        case "register":

            if (!validateService(service)) {
                modalRegister();
            } else {
                return service;
            }

            break;
        case "filter":
            return service;
            break;
    }
}

function validateService(service) {

    let returnOk = Boolean;
    returnOk = true;

    service.forEach(element => {
        if ((element == '') || (element == 'null')) {
            returnOk = false
        }
    });

    return returnOk;
}

function registerService() {

    let service = [];
    service = loadService("register");

    if (service !== undefined) {
        try {
            if (controllerRegisterService(...service)) {
                routes("routeQuery");
            }
        } catch (error) {
            alert(`Erro ao cadastrar novo serviço. \n\n ${error}`);
        }
    }
}

if (btnViewModalCancel !== null) {
    btnViewModalCancel.addEventListener("click", () => modalDelete(false));
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalDelete(false);
        loadFormatElements("routeQuery", false, []);
    }
});

if (btnViewModalConfirm !== null) {
    btnViewModalConfirm.addEventListener("click", () => deleteService());
}

export function deleteService() {

    let serviceCode = document.getElementById("viewModalBody"), service = String;
    service = serviceCode.innerHTML;
    // make value in number;
    service = +service.substring(18);

    if (controllerDeleteService(service)) {
        loadFormatElements("routeQuery", false, [], false);
        modalDelete(false);
    }
}

routeOut.addEventListener("click", () => routes("routeOutSection"));

if (btnSearch !== null) {
    btnSearch.addEventListener("click", () => {
        loadFormatElements("routeQuery", true, loadService("filter"), false);
    });
}

if (btnRefresh !== null) {
    btnRefresh.addEventListener("click", () => {
        loadFormatElements("routeQuery", false, [], true);
    });
}

function loadFormatElements(page, filter, searchList, refreshElements) {
    try {
        loadElements(page, controllerListService(), filter, searchList, refreshElements);
    } catch (error) {
        alert(` Entre em contato com o suporte da ${nameSocial} \n email: ${emailSocial}
        \n\n ${error}`);
    }
}