import { daoRegisterService, daoListService } from "../dao/dao.Service.js";

class Service {
    constructor(_year, _mounth, _day, _tipeService, _descriptionService, _valueService) {
        this.year = _year;
        this.mounth = _mounth;
        this.day = _day;
        this.tipeService = _tipeService;
        this.descriptionService = _descriptionService;
        this.valueService = _valueService;
    }

    validFields() {
        for (let property in this) {
            if (this[property] == '' || this[property] == null || this[property] == undefined) {
                return false;
            };
        };
        return true;
    };
}

export function modelRegisterService(...valuePropertyService) {

    let service = new Service(...valuePropertyService);
    if (service.validFields()) {
        return daoRegisterService(service);
    };
}

export function modelListService() {
    return daoListService();
}