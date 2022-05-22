import { controllerListService } from "./controller.Service.js";

var auxClass = "form-control";

var createDay = (d) => {
    let elementDay = document.getElementById("day"),
        numdays = Number = 31;

    if (d != 0) {
        numdays = d;
        elementDay.innerHTML = '';
    };

    for (let i = 0; i <= numdays; i++) {
        let option = document.createElement("option");

        if (i == 0) {
            option.value = null;
            option.innerHTML = "Dia";
        } else {
            option.value = i;
            option.innerHTML = i;
        };

        elementDay.appendChild(option);
    }
    elementDay.setAttribute("class", auxClass);
}

var createYear = () => {
    let elementYear = document.getElementById("year");
    let firtsStep = false;

    let objData = new Date(), numyear = objData.getFullYear();

    for (let i = 2016; i <= numyear; i++) {
        // first step deprecated 2016
        let option = document.createElement("option");

        if (firtsStep != true) {
            option.value = null;
            option.innerHTML = "Ano";
            firtsStep = true;
        } else {
            option.value = i;
            option.innerHTML = i;
        }
        elementYear.appendChild(option);
    }
    elementYear.setAttribute("class", auxClass);
}

var createMounth = () => {
    let elementMounth = document.getElementById("mouth"),
        i = Number = 0;
    const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    months.forEach(element => {
        let option = document.createElement("option");

        if (i == 0) {
            option.value = null;
            option.innerHTML = "Mês";
        } else {
            option.value = element;
            option.innerHTML = element;
        }
        elementMounth.appendChild(option);

        i = i + 1;
    });
    elementMounth.setAttribute("class", auxClass);
}

var createActivity = () => {
    let elementType = document.getElementById("typeService");
    let i = 0;
    const typeActivity = ["", "Alimentação", "Educação", "Lazer", "Saúde", "Transporte"];

    typeActivity.forEach(element => {
        let option = document.createElement("option");

        if (i == 0) {
            option.value = null;
            option.innerHTML = "tipo do serviço";
        } else {
            option.value = element;
            option.innerHTML = element;
        }
        elementType.appendChild(option);

        i = i + 1;
    });
    elementType.setAttribute("class", auxClass);
}

var createClassInput = () => {
    let elementsInput = document.querySelectorAll("input");
    let aux = ["Descrição", "Valor"];

    for (let i = 0; i < elementsInput.length; i++) {
        elementsInput[i].type = "text";
        elementsInput[i].placeholder = aux[i];
        elementsInput[i].setAttribute("class", auxClass);
    };
}

var createClassTable = (page, listService) => {

    if (page != "routeQuery") {

        let table = document.createElement("table"),
            thead = document.createElement("thead"),
            tbody = document.createElement("tbody"),
            tableRow = document.createElement("tr"),
            aux = ["Data", "Tipo", "Descrição", "Valor"];

        table.appendChild(thead);
        table.appendChild(tbody);
        table.setAttribute("class", "table table-sm table-bordered");

        // create table.
        document.getElementById("tableQuery").appendChild(table);

        // adding table head.
        aux.forEach(element => {
            let th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.innerHTML = element;
            tableRow.appendChild(th);
            thead.appendChild(tableRow);
        });

        if (listService != undefined) {

            listService.forEach(element => {
                let lineTable = table.insertRow();
                lineTable.insertCell(0).innerHTML = `${element.day}/${element.mounth}/${element.year}`;
                lineTable.insertCell(1).innerHTML = element.tipeService;
                lineTable.insertCell(2).innerHTML = element.descriptionService;
                lineTable.insertCell(3).innerHTML = element.valueService;
                lineTable.insertCell(4).innerHTML = '<i class="fas fa-trash"></i>';
            });
        };
    };
}

export function loadElements(page, listService) {
    createYear();
    createMounth();
    createActivity();
    createDay(0);
    createClassInput();
    createClassTable(page, listService);
}

export function checkLeapTear() {
    let objData = new Date(),
        aux = Number;

    if ((document.getElementById("year").value == "''") && (document.getElementById("mouth").value == "''")) {
        let numyear = objData.getFullYear(),
            numMounth = objData.getMonth() + 1,
            qtdDay = new Date(numyear, numMounth, 0).getDate();

        createDay(qtdDay)
    } else {

        // result based on Leap year.
        switch (document.getElementById("mouth").value) {
            case "Janeiro": aux = 1;
                break;
            case "Fevereiro": aux = 2;
                break;
            case "Março": aux = 3;
                break;
            case 'Abril': aux = 4;
                break;
            case "Maio": aux = 5;
                break;
            case "Junho": aux = 6;
                break;
            case "Julho": aux = 7;
                break;
            case "Agosto": aux = 8;
                break;
            case "Setembro": aux = 9;
                break;
            case "Outubro": aux = 10;
                break;
            case "Novembro": aux = 11;
                break;
            case "Dezembro": aux = 12;
                break;
        };

        let numyear = parseInt(document.getElementById("year").value),
            numMounth = aux,
            qtdDay = new Date(numyear, numMounth, 0).getDate();

        createDay(qtdDay)
    };
}