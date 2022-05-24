export function daoRegisterService(listService) {

    let valuePk = Number;
    valuePk = nextPrimayKey();

    window.localStorage.setItem('id', valuePk);

    listService.code = valuePk;
    localStorage.setItem(valuePk, JSON.stringify(listService));
    return true;
}

function nextPrimayKey() {
    let valuePk = window.localStorage.getItem("id");

    if ((valuePk == null) || (valuePk == undefined)) {
        window.localStorage.setItem("id", "0");
    }

    if (!isNaN(valuePk)) {
        valuePk = parseInt(window.localStorage.getItem("id"));
        valuePk = valuePk + 1;
    }
    else {
        // local storage is limited. 
        valuePk = "10"
        valuePk = parseInt(valuePk);
    }
    return valuePk;
}

export function daoListService() {
    let listService = [],
        totalId = Number;

    if (window.localStorage.getItem('id') != null) {
        totalId = parseInt(window.localStorage.getItem('id'));

        for (let i = 1; i <= totalId; i++) {
            if (JSON.parse(window.localStorage.getItem([i])) != null) {
                listService.push(JSON.parse(window.localStorage.getItem([i])));
            }
        }
        return listService;
    }
}

export function daoDeleteService(code) {

    if (window.localStorage.getItem(code) != null) {
        window.localStorage.removeItem(code);
        return true;
    }
}