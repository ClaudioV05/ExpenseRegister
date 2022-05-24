import { modelRegisterService, modelListService, modelDeleteService } from "../model/model.Service.js";

export function controllerRegisterService(...valuePropertyService) {
    return modelRegisterService(...valuePropertyService);
}

export function controllerListService() {
    return modelListService();
}

export function controllerDeleteService(code = 0) {
    return modelDeleteService(code);
}