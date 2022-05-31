import { emailSocial, nameSocial } from "../../utils/varGlobais.js";

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
        route.addEventListener("click", () => indicateRoute("routeQuery"));
        document.addEventListener("keypress", (event) => (event.key === "Enter") ? registerService() : false);
        break;
    case 2:
        loadFormatElements("routeQuery", false, []);
        route.addEventListener("click", () => indicateRoute("routeRegister"));
        break;
}

routeOut.addEventListener("click", () => indicateRoute("routeOutSection"));

selectMounth.addEventListener("click", async () => {
    await import("./controller.UtilsHtml.js").then(module => module.checkLeapTear());
})


if (btnRegisterService !== null) {
    btnRegisterService.addEventListener("click", () => registerService());
}

function loadService(action = String) {
    let service = [];

    if ((document.getElementById("year").value !== "null") && (action === "filter")) {
        service['year'] = document.getElementById("year").value;
    } else if ((document.getElementById("year").value !== "null") && (action === "register")) {
        service.push(document.getElementById("year").value);
    }

    if ((document.getElementById("mouth").value !== "null") && (action === "filter")) {
        service['mouth'] = document.getElementById("mouth").value;
    } else if ((document.getElementById("mouth").value !== "null") && (action === "register")) {
        service.push(document.getElementById("mouth").value);
    }

    if ((document.getElementById("day").value !== "null") && (action === "filter")) {
        service['day'] = document.getElementById("day").value;
    } else if ((document.getElementById("day").value !== "null") && (action === "register")) {
        service.push(document.getElementById("day").value);
    }

    if ((document.getElementById("typeService").value !== "null") && (action === "filter")) {
        service['typeService'] = document.getElementById("typeService").value;
    } else if ((document.getElementById("typeService").value !== "null") && (action === "register")) {
        service.push(document.getElementById("typeService").value);
    }

    if ((document.getElementById("descriptionService").value !== "null") && (action === "filter")) {
        service['descriptionService'] = document.getElementById("descriptionService").value;
    } else if ((document.getElementById("descriptionService").value !== "null") && (action === "register")) {
        service.push(document.getElementById("descriptionService").value);
    }

    if ((document.getElementById("valueService").value !== "null") && (action === "filter")) {
        service['valueService'] = document.getElementById("valueService").value;
    } else if ((document.getElementById("valueService").value !== "null") && (action === "register")) {
        service.push(document.getElementById("valueService").value);
    }

    switch (action) {
        case "register":

            if (!validateService(service)) {
                modalRegisterService();
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

    let p = Boolean;
    p = true;

    service.forEach(element => {
        if ((element == '') || (element == 'null')) {
            p = false
        }
    });

    return p;
}

function registerService() {

    let service = [];
    service = loadService("register");

    if (service !== undefined) {
        try {
            let returnOk = Boolean;

            register(...service).then(returnOk);

            if (returnOk) {
                indicateRoute("routeQuery");
            }
        } catch (error) {
            alert(`Erro ao cadastrar novo serviço. \n\n ${error}`);
        }
    }
}

if (btnViewModalCancel !== null) {
    btnViewModalCancel.addEventListener("click", () => modalDeleteService(false));
}

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modalDeleteService(false);
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

    if (delService(service)) {
        loadFormatElements("routeQuery", false, [], false);
        modalDeleteService(false);
    }
}

routeOut.addEventListener("click", () => indicateRoute("routeOutSection"));

if (btnSearch !== null) {
    btnSearch.addEventListener("click", () => loadFormatElements("routeQuery", true, loadService("filter"), false));
}

if (btnRefresh !== null) {
    btnRefresh.addEventListener("click", () => loadFormatElements("routeQuery", false, [], true));
}

async function loadFormatElements(page, filter, searchList, refreshElements) {
    try {
        const auxListService = await list();

        await import("./controller.UtilsHtml.js").then((module) => module.loadElements(page, auxListService, filter, []));

        if (filter) {
            // await import("./controller.UtilsHtml.js").then((module) => module.loadElements(page, filter, searchList, filter));
        } else {
            // await import("./controller.UtilsHtml.js").then((module) => module.loadElements(page, filter, searchList, filter, aux));
        }

    } catch (error) {
        alert(` Entre em contato com o suporte da ${nameSocial} \n email: ${emailSocial}
        \n\n ${error}`);
    }
}

async function register(...service) {
    let aux = Boolean;
    await import("./controller.Service.js").then(module => aux = module.controllerRegisterService(...service));
    return aux;
}

async function list() {
    let aux = [];
    await import("./controller.Service.js").then(module => aux = module.controllerListService());
    return aux;
}

async function delService(serviceCode = '') {
    await import("./controller.Service.js").then(module => module.modalRegister(serviceCode));
}

async function modalRegisterService() {
    await import("./controller.UtilsHtml.js").then(module => module.modalRegister());
}

async function modalDeleteService(elementEnabled = false) {
    await import("./controller.UtilsHtml.js").then(module => module.modalDelete(elementEnabled));
}

async function indicateRoute(directyRoutes = '') {
    await import("./controller.Routes.js").then(module => module.routes(directyRoutes));
}