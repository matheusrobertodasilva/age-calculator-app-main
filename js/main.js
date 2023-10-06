/*
Processamento

- verificar se o dia é maior que 31;
- verificar se o mês é maior que 12;
- verifica se o ano é maior que o atual;

Saida de dados

- anos de vida;
- meses de vida
- dias de vida;
*/



// Referencia de elementos 
const inDay = document.getElementById("inDay");
const inMonth = document.getElementById("inMonth");
const inYear = document.getElementById("inYear");
const outDay = document.getElementById("outDay");
const outMonth = document.getElementById("outMonth");
const outYear = document.getElementById("outYear");

// Entrada de dados 
let day = Number(inDay.value);
let month = Number(inMonth.value);
let year = Number(inYear.value);

// Processamento
// let date = new Date();
// let age = date.getFullYear() - year;
// let ageMonth = (month - (date.getMonth() + 1));
// let ageDay = ();
// Saida de dados 




inYear.addEventListener("blur", () => {
    outYear.textContent = age;
    outMonth.textContent = ageMonth;
    outDay.textContent = ageDay;
})