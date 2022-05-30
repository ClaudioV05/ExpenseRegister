var listFilteredClass = "form-control";

function setParamsDefaultDate(_page = '') {

    if (_page === "routeRegister") {

        let listFiltered = String,
            date = new Date();

        switch (date.getMonth() + 1) {
            case 1: listFiltered = "Janeiro";
                break;
            case 2: listFiltered = "Fevereiro";
                break;
            case 3: listFiltered = "Março";
                break;
            case 4: listFiltered = "Abril";
                break;
            case 5: listFiltered = "Maio";
                break;
            case 6: listFiltered = "Junho";
                break;
            case 7: listFiltered = "Julho";
                break;
            case 8: listFiltered = "Agosto";
                break;
            case 9: listFiltered = "Setembro";
                break;
            case 10: listFiltered = "Outubro";
                break;
            case 11: listFiltered = "Novembro";
                break;
            case 12: listFiltered = "Dezembro";
                break;
        }
        document.getElementById("year").value = date.getFullYear();
        document.getElementById("mouth").value = listFiltered;
        document.getElementById("day").value = date.getDate();
    }
}

var createDay = (d) => {
    let elementDay = document.getElementById("day"),
        numdays = Number = 31;
    
        elementDay.innerHTML = '';

    if (d != 0) {
        numdays = d;
        elementDay.innerHTML = '';
    }

    for (let i = 0; i <= numdays; i++) {
        let option = document.createElement("option");

        if (i == 0) {
            option.value = null;
            option.innerHTML = "Dia";
        } else {
            option.value = i;
            option.innerHTML = i;
        }
        elementDay.appendChild(option);
    }
    elementDay.setAttribute("class", listFilteredClass);
}

var createYear = () => {
    let elementYear = document.getElementById("year");
    let firtsStep = false;

    let objData = new Date(), numyear = objData.getFullYear();

    elementYear.innerHTML = '';

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
    elementYear.setAttribute("class", listFilteredClass);
}

var createMounth = () => {
    let elementMounth = document.getElementById("mouth"),
        i = Number = 0;
    const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    elementMounth.innerHTML = '';

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

        i += 1;
    });
    elementMounth.setAttribute("class", listFilteredClass);
}

var createActivity = () => {
    let elementTypeService = document.getElementById("typeService");
    let i = 0;
    const typeActivity = ["", "Alimentação", "Educação", "Lazer", "Saúde", "Transporte"];

    elementTypeService.innerHTML = '';

    typeActivity.forEach(element => {
        let option = document.createElement("option");

        if (i == 0) {
            option.value = null;
            option.innerHTML = "tipo do serviço";
        } else {
            option.value = element;
            option.innerHTML = element;
        }
        elementTypeService.appendChild(option);

        i += 1;
    });
    elementTypeService.setAttribute("class", listFilteredClass);
}

var createClassInput = () => {
    let elementsInput = document.querySelectorAll("input");
    let listFiltered = ["Descrição", "Valor"];

    for (let i = 0; i < elementsInput.length; i++) {
        elementsInput[i].type = "text";
        elementsInput[i].placeholder = listFiltered[i];
        elementsInput[i].setAttribute("class", listFilteredClass);
    }
}

var createClassTable = (_page, _listService, _filter, _searchList) => {

    if (_page === "routeQuery") {

        // clear grid
        document.getElementById("tableQuery").innerHTML = '';

        if ((_listService.length == 0) && (_listService !== null)) {
            let table = document.createElement("table"),
                thead = document.createElement("thead"),
                tableRow = document.createElement("tr"),
                listFiltered = ["Código", "Data", "Tipo", "Descrição", "Valor"];

            table.appendChild(thead);
            table.setAttribute("class", "table table-sm table-bordered");

            // create table.
            document.getElementById("tableQuery").appendChild(table);

            // adding table head.
            let itemElement = Number;
            itemElement = - 1;

            listFiltered.forEach(element => {
                let th = document.createElement("th");

                itemElement = itemElement + 1;

                th.setAttribute("scope", "row");
                th.setAttribute("id", "th" + itemElement);

                th.innerHTML = element;
                tableRow.appendChild(th);
                thead.appendChild(tableRow);
            });

            if (_filter) {

                let listFiltered = [];

                listFiltered = _listService.filter(element => {

                    if ((element.year == _searchList.year) && (_searchList.year !== undefined)) {
                        return element
                    }

                    if ((element.mouth == _searchList.mouth) && (_searchList.mouth !== undefined)) {
                        return element
                    }

                    if ((element.day == _searchList.day) && (_searchList.day !== undefined)) {
                        return element
                    }

                    if ((element.typeService == _searchList.typeService) && (_searchList.typeService !== undefined)) {
                        return element
                    }

                    if ((element.descriptionService == _searchList.descriptionService) && (_searchList.descriptionService !== undefined)) {
                        return element
                    }

                    if ((element.valueService == _searchList.valueService) && (_searchList.valueService !== undefined)) {
                        return element
                    }
                
                });

                listFiltered.forEach(element => loadComponents(table, element));
            } else {
                _listService.forEach(element => loadComponents(table, element));
            }
        }
    }
}

let loadComponents = (obtTable, objElement) => {
    // create button for id.
    let btnDelete = document.createElement("button");

    btnDelete.setAttribute("id", "deleteService");
    btnDelete.setAttribute("value", objElement.code);
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    btnDelete.onclick = () => modalDelete(true, objElement.code);

    let lineTable = obtTable.insertRow();
    lineTable.insertCell(0).innerHTML = objElement.code;
    lineTable.insertCell(1).innerHTML = `${objElement.day}/${objElement.mounth}/${objElement.year}`;
    lineTable.insertCell(2).innerHTML = objElement.typeService;
    lineTable.insertCell(3).innerHTML = objElement.descriptionService;
    lineTable.insertCell(4).innerHTML = objElement.valueService;
    lineTable.insertCell(5).appendChild(btnDelete);
}

export function loadElements(_page, _listService, _filter, _searchList) {
    createYear();
    createMounth();
    createActivity();
    createDay(0);
    createClassInput();
    createClassTable(_page, _listService, _filter, _searchList);
    setParamsDefaultDate(_page);
}

export function modalDelete(elementEnabled = true, serviceCode) {

    let viewModal = document.getElementById("viewModal"),
        viewModalLabel = document.getElementById("viewModalBody");

    if (elementEnabled) {
        viewModal.setAttribute("class", "modal fade show");
        viewModal.setAttribute("style", "display: block");
        viewModalLabel.innerHTML = `Código do serviço: ${serviceCode}`;
        viewModalLabel.setAttribute("value", serviceCode);
    } else {
        viewModal.setAttribute("class", "modal fade");
        viewModal.setAttribute("style", "display: none");
        viewModal.setAttribute("aria-hidden", true);
        viewModal.setAttribute("data-dismiss", "modal");
    }
}

export function modalRegister() {
    let alert = document.getElementById("alert");

    alert.setAttribute("class", "alert alert-dark");
    alert.setAttribute("role", "alert");
    alert.innerHTML = "Campos obrigatórios!"
    alert.style.display = 'block';

    let displayNone = () => alert.style.display = 'none';

    setTimeout(displayNone, 2000);
}

export function checkLeapTear() {
    let objData = new Date(), listFiltered = Number;

    if ((document.getElementById("year").value == "''") && (document.getElementById("mouth").value == "''")) {
        let numyear = objData.getFullYear(),
            numMounth = objData.getMonth() + 1,
            qtdDay = new Date(numyear, numMounth, 0).getDate();

        createDay(qtdDay)
    } else {

        // result based on Leap year.
        switch (document.getElementById("mouth").value) {
            case "Janeiro": listFiltered = 1;
                break;
            case "Fevereiro": listFiltered = 2;
                break;
            case "Março": listFiltered = 3;
                break;
            case "Abril": listFiltered = 4;
                break;
            case "Maio": listFiltered = 5;
                break;
            case "Junho": listFiltered = 6;
                break;
            case "Julho": listFiltered = 7;
                break;
            case "Agosto": listFiltered = 8;
                break;
            case "Setembro": listFiltered = 9;
                break;
            case "Outubro": listFiltered = 10;
                break;
            case "Novembro": listFiltered = 11;
                break;
            case "Dezembro": listFiltered = 12;
                break;
        }

        let numyear = parseInt(document.getElementById("year").value),
            numMounth = listFiltered,
            qtdDay = new Date(numyear, numMounth, 0).getDate();

        createDay(qtdDay)
    }
}