// -- Regra de Negócios -- //

// Carne - 400 gramas por pessoa + de 6 horas - 650 gramas
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante - 2000 ml por pessoa + 6 horas 4000ml

// Crianças valem por 0,5 no Input da Carne

// ---------------------------------------------------------- //


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
let carne = document.getElementById("carne");
let cerveja = document.getElementById("cerveja");
let refrigerante = document.getElementById("refrigerante");

function calcular() {

    if (inputDuracao.value <= 6) {

        //1º Calculo da Carne //
        carneAdultos = inputAdultos.value * 400
        carneCriancas = (inputCriancas.value / 2) * 400
        let result1 = carneAdultos + carneCriancas;

        // Inserindo a Quantidade de Carne na Tela
        calc1 = Math.round(result1/1000);
        carne.innerHTML = "<span>&#x1F356; </span>" + calc1 + " Kg de Carne";
    

        // 2º Calculo da Cerveja //
        let result2 = inputAdultos.value * 1200;
        // Inserindo a Quantidade de Cerveja na Tela //
        calc2 = Math.round(result2/330);
        cerveja.innerHTML = "<span>&#x1F37A; </span>" + calc2 + " Latas de Cerveja";

        // 3º Calculo do Refrigerante //
        let result3 = (inputCriancas.value) * 2000;
        // Inserindo a Quantidade de Refrigerante na Tela
        calc3 = Math.round(result3/2000);
        refrigerante.innerHTML = "<span>&#x1F964; </span>" + calc3 + " Refrigerante(s) de 2 Litros";

    } else {
        //1º Calculo da Carne //
        carneAdultos = inputAdultos.value * 650
        carneCriancas = (inputCriancas.value / 2) * 650
        let result1 = carneAdultos + carneCriancas;

        // Inserindo a Quantidade de Carne na Tela
        calc1 = Math.round(result1/1000);
        carne.innerHTML = "<span>&#x1F356; </span>" + calc1 + " Kg de Carne";

        // 2º Calculo da Cerveja //
        let result2 = inputAdultos.value * 2000
        // Inserindo a Quantidade de Cerveja na Tela //
        calc2 = Math.round(result2/330);
        cerveja.innerHTML = "<span>&#x1F37A; </span>" + calc2 + " Latas de Cerveja";

        // 3º Calculo do Refrigerante //
        let result3 = (inputCriancas.value) * 4000;
        // Inserindo a Quantidade de Refrigerante na Tela
        calc3 = Math.round(result3/2000);
        refrigerante.innerHTML = "<span>&#x1F964; </span>" + calc3 + " Refrigerante(s) de 2 Litros";
        
    }
}

