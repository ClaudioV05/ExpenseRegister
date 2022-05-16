var auxClass = 'form-control';

var createDay = (d) => {
    let select = document.getElementById('day');
    let numdays = 31;

    if (d != 0) {
        numdays = d;
        select.innerHTML = '';
        
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
        select.appendChild(opt);
    }
    select.className = auxClass;
}

var createYear = () => {
    let select = document.getElementById('year');
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
        select.appendChild(opt);
    }
    select.className = auxClass;
}

var createMounth = () => {
    let select = document.getElementById('mouth');
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
        select.appendChild(opt);

        i = i + 1;
    });
    select.className = auxClass;
}

var createActivity = () => {
    let select = document.getElementById('type');
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
        select.appendChild(opt);

        i = i + 1;
    });
    select.className = auxClass;
}

function loadElements() {
    createYear();
    createMounth();
    createActivity();
    createDay(0);
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