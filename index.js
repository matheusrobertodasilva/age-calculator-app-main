function mostrarResultado(age,month,day){
    const outAge = document.getElementById("outAge");
    const outMonths = document.getElementById("outMonths");
    const outDays = document.getElementById("outDays");

    outAge.innerHTML = age
    outMonths.innerHTML = month
    outDays.innerHTML = day
}

function msgError(msg){
    const msgDay = document.getElementById("msgDay");
    const msgMonth = document.getElementById("msgMonth");
    const msgYear = document.getElementById("msgYear");
    const formLabel = document.querySelectorAll(".form__label");
    const formInput = document.querySelectorAll(".form__input");
    console.log(formLabel);
    console.log(formInput);

    for(let i = 0; i < formLabel.length; i++){
        formLabel[i].classList.toggle("active");
    }

    switch (msg) {
        case 1:
            // formLabel.classList.add("active")
            msgDay.innerHTML = "Must be a valid day";
        break;
        case 2:
            msgMonth.innerHTML = "Must be a valid month";
        break;
        case 3:
            msgYear.innerHTML = "Must be in the past";
        break;
    }
}

function verificaCampo(day,month,year){
    //Referencia de elementos de mensagem de erro
    const msgDay = document.getElementById("msgDay");
    const msgMonth = document.getElementById("msgMonth");
    const msgYear = document.getElementById("msgYear");
    
    const formLabel = document.getElementsByClassName("form__label")
    const input = document.querySelectorAll("input");

    // verificando dados
    if(day > 31 || day == "" || isNaN(day)){
        msgDay.innerHTML = "Must be a valid day";
    } else {
        msgDay.innerHTML = null;
    }

    if(month > 12 || month == "" || isNaN(month)){
        msgMonth.innerHTML = "Must be a valid month";
        // return
    } else{
        msgMonth.innerHTML = null;
    }
    if(year > 2024 || year == "" || isNaN(year)){
        msgYear.innerHTML = "Must be in the past";
    } else {
        msgYear.innerHTML = null;
    }

    let retorna = null;

    if(msgDay.innerHTML == "" || msgMonth.innerHTML == "" || msgYear.innerHTML == ""){
        input.forEach((element,i) => {
            element.classList.remove("form__input--active");
            formLabel[i].classList.remove("form__label--active"); 
            retorna = true
        });
    } else {
        input.forEach((element,i) => {
            element.classList.add("form__input--active");
            formLabel[i].classList.add("form__label--active");
        });
        retorna = false;
    }
    
    return retorna
}

function calcularIdade(){
    //Referencia de elementos de input
    const inDay = document.getElementById("inDay");
    const inMonth = document.getElementById("inMonth");
    const inYear = document.getElementById("inYear");

    //Entrada de dados
    let day = Number(inDay.value);
    let month = Number(inMonth.value);
    let year = Number(inYear.value);

    // verificando dados
    if(verificaCampo(day,month,year)){
        //Calculando idade (Processamento)
        const dataAtual = new Date();
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth() + 1;
        let anoAtual = dataAtual.getFullYear();

        let idade = anoAtual - year;
        let meses = Math.abs(mesAtual - month);
        let dias = 30 - Math.abs(diaAtual - day);

        if(diaAtual == day && mesAtual == mes){
            idade++
        } else if(diaAtual == day){
            dias = 0
            meses++
        } else {
            meses--
        }

        //Saida de dados 
        mostrarResultado(idade,meses,dias)

    } else {
        return
    }
    
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    calcularIdade()
})