import { routes } from "./controller.Routes.js";
import { emailSocial, nameSocial } from "../../utils/varGlobais.js";
import { controllerRegisterService, controllerListService, controllerDeleteService } from "./controller.Service.js";
import { loadElements, checkLeapTear, elementShowModal } from "./controller.UtilsHtml.js";

const route = document.getElementById("route");
const routeOut = document.getElementById("routeOut");
const selectMounth = document.getElementById("mouth");
const btnRegisterService = document.getElementById("btnRegisterService");
const btnViewModalCancel = document.getElementById("viewModalCancel");
const btnViewModalConfirm = document.getElementById("viewModalConfirm");

switch (route.value) {
    case 1:
        loadFormatElements("routeRegister");
        route.addEventListener("click", () => routes("routeQuery"));
        document.addEventListener("keypress", (event) => (event.key === "Enter") ? registerService() : false);
        break;
    case 2:
        loadFormatElements("routeQuery");
        route.addEventListener("click", () => routes("routeRegister"));
        break;
}

routeOut.addEventListener("click", () => routes("routeOutSection"));

selectMounth.addEventListener("click", () => checkLeapTear());

if (btnRegisterService !== null) {
    btnRegisterService.addEventListener("click", () => registerService());
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
        }
    } catch (error) {
        alert(`Erro ao cadastrar novo serviço. \n\n ${error}`);
    }
}

btnViewModalCancel.addEventListener("click", () => elementShowModal(false));
btnViewModalConfirm.addEventListener("click", () => deleteService());

export function deleteService() {

    let serviceCode = document.getElementById("viewModalBody"), aux = String;
    aux = serviceCode.innerHTML;
    // make value in number;
    aux = +aux.substring(18);

    if (controllerDeleteService(aux)) {
        loadFormatElements("routeQuery");
        elementShowModal(false);
    }
}

routeOut.addEventListener("click", () => routes("routeOutSection"));

function loadFormatElements(page) {
    try {
        loadElements(page, controllerListService());
    } catch (error) {
        alert(` Entre em contato com o suporte da ${nameSocial} \n email: ${emailSocial}
        \n\n ${error}`);
    }
}