import { daoRegisterService, daoListService, daoDeleteService} from "../dao/dao.Service.js";

class Service {
    constructor(_year, _mounth, _day, _tipeService, _descriptionService, _valueService, _code) {
        this.year = _year;
        this.mounth = _mounth;
        this.day = _day;
        this.tipeService = _tipeService;
        this.descriptionService = _descriptionService;
        this.valueService = _valueService;
        this.code = _code;
    }
}

export function modelRegisterService(...valuePropertyService) {
    let service = new Service(...valuePropertyService);
    return daoRegisterService(service);
}

export function modelListService() {
    return daoListService();
}

export function modelDeleteService(code) {
    return daoDeleteService(code);
}