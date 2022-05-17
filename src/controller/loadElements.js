var auxClass = 'form-control';

var createDay = (d) => {
    let elementDay = document.getElementById('day');
    let numdays = 31;

    if (d != 0) {
        numdays = d;
        elementDay.innerHTML = '';
    }

    for (let i = 0; i <= numdays; i++) {
        let opt = document.createElement('option');

        if (i == 0) {
            opt.value = "''";
            opt.innerHTML = "Dia";
        } else {
            opt.value = i;
            opt.innerHTML = i;
        }
        elementDay.appendChild(opt);
    }
    elementDay.setAttribute('class', auxClass);
}

var createYear = () => {
    let elementYear = document.getElementById('year');
    let firtsStep = false;

    let objData = new Date(), numyear = objData.getFullYear();

    for (let i = 2016; i <= numyear; i++) {
        // first step deprecated 2016
        let opt = document.createElement('option');

        if (firtsStep != true) {
            opt.value = "''";
            opt.innerHTML = "Ano";
            firtsStep = true;
        } else {
            opt.value = i;
            opt.innerHTML = i;
        }
        elementYear.appendChild(opt);
    }
    elementYear.setAttribute('class', auxClass);
}

var createMounth = () => {
    let elementMounth = document.getElementById('mouth');
    i = 0;
    const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    months.forEach(element => {
        let opt = document.createElement('option');

        if (i == 0) {
            opt.value = "''";
            opt.innerHTML = "Mês";
        } else {
            opt.value = i;
            opt.innerHTML = element;
        }
        elementMounth.appendChild(opt);

        i = i + 1;
    });
    elementMounth.setAttribute('class', auxClass);
}

var createActivity = () => {
    let elementType = document.getElementById('type');
    let i = 0;
    const typeActivity = ["", "Alimentação", "Educação", "Lazer", "Saúde", "Transporte"];

    typeActivity.forEach(element => {
        let opt = document.createElement('option');

        if (i == 0) {
            opt.value = "''";
            opt.innerHTML = "tipo do serviço";
        } else {
            opt.value = i;
            opt.innerHTML = element;
        }
        elementType.appendChild(opt);

        i = i + 1;
    });
    elementType.setAttribute('class', auxClass);
}

var createClassInput = () => {
    let elementsInput = document.getElementsByTagName('input');
    let aux = ['Descrição', 'Valor'];

    for (let i = 0; i < elementsInput.length; i++) {
        elementsInput[i].type = 'text';
        elementsInput[i].placeholder = aux[i]
        elementsInput[i].setAttribute('class', auxClass);        
    }
}

var createClassTable = () => {
    let aux = ['Data', 'Tipo', 'Descrição', 'Valor'];
    let auxBody = ['1', '2', '3', '4'];

    let table = document.createElement('table'),
    thead = document.createElement('thead'),
    tbody = document.createElement('tbody'),
    tr = document.createElement('tr'),
    trbody = document.createElement('tr');
    
    // creation head table.
    table.setAttribute('class', 'table table-sm table-bordered');        
    document.getElementById('tableQuery').appendChild(table);

     table.appendChild(thead);
     thead.appendChild(tr)

    for (let i = 0; i < aux.length; i++) {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');        
        th.innerHTML = aux[i];
        tr.appendChild(th);
    }
    
    // creation body table.
    tbody.setAttribute('class', 'table-group-divider');        
    table.appendChild(tbody);

    tbody.appendChild(trbody);
    
    for (let i = 0; i < auxBody.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = auxBody[i];
        trbody.appendChild(td);
    }
}

function loadElements() {
    createYear();
    createMounth();
    createActivity();
    createDay(0);
    createClassInput();
    createClassTable();
}

function checkLeapTear() {
    let objData = new Date();

    if ((document.getElementById("year").value == "''") && (document.getElementById("mouth").value == "''")) {
       let numyear = objData.getFullYear(),
        numMounth = objData.getMonth() + 1,
        qtdDay = new Date(numyear, numMounth, 0).getDate();
        createDay(qtdDay)
    } else {
        // result based on Leap year.
        let numyear = parseInt(document.getElementById("year").value),
        numMounth = parseInt(document.getElementById("mouth").value),
        qtdDay = new Date(numyear, numMounth, 0).getDate();
        createDay(qtdDay)
    }
}