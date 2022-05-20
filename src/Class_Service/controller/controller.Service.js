import { modelRegisterService, modelListService } from "../model/model.Service.js";

export function controllerRegisterService(...valuePropertyService) {
    return modelRegisterService(...valuePropertyService);
};

export function controllerListService() {
    return modelListService();
};