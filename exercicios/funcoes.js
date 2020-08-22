// PRIMEIRA FUNÇÃO - QUADRADO DE UM NÚMERO
const nmrQuadrado = document.querySelector('#nmrQuadrado');
const btnCalcular = document.querySelector('#btnCalcular');
const resultadoUm = document.querySelector('#resultadoUm');

const quadrado = nmrQuadrado => nmrQuadrado * nmrQuadrado;

const calcular = () => {
    resultadoUm.innerHTML = quadrado(nmrQuadrado.value);
    return quadrado;
}

btnCalcular.addEventListener('click', calcular);




// SEGUNDA FUNÇÃO - MAIOR NÚMERO
const nmrUm = document.getElementById('nmrUm');
const nmrDois = document.getElementById('nmrDois');
const cliqueCalcular = document.getElementById('cliqueCalcular');
const resultadoDois = document.getElementById('resultadoDois');

const maiorMenor = (nmrUm, nmrDois) => {
    return Math.max(nmrUm, nmrDois);
}

const exercicioDois = () => {
    resultadoDois.innerHTML = maiorMenor(nmrUm.value, nmrDois.value);
}

cliqueCalcular.addEventListener('click', exercicioDois);




// TERCEIRA FUNÇÃO - NOME E ESTADO
const nomeUm = document.getElementById('nomeUm');
const estado = document.getElementsByClassName('estado');
const gerarUm = document.getElementById('gerarUm');
const fraseUm = document.getElementById('fraseUm');


const radioSaida = () => {
    for (let i = 0 ; i < estado.length ; i++) {
        if (estado[i].checked) {
            return estado[i].value
        }
    } 
}

const mensagem = () => {
    fraseUm.innerHTML = nomeUm.value + " mora no estado de " + radioSaida();
}

gerarUm.addEventListener('click', mensagem);




// QUARTA FUNÇÃO - NOME E PROFISSÃO
const nomeDois = document.getElementById("nomeDois");
const frontEnd = document.getElementById("frontEnd");
const designWeb = document.getElementById("designWeb");
const analistaDeSistemas = document.getElementById("analistaDeSistemas");
const suporteTecnico = document.getElementById("suporteTecnico");
const fraseDois = document.getElementById("fraseDois");


const varredura = () => {
    const texto = ["FrontEnd", "Design Web" , "Analista De sistemas", "Suporte Técnico"];
    fraseDois.innerHTML = "";
    if ((frontEnd.checked || designWeb.checked || analistaDeSistemas.checked || suporteTecnico.checked) && !nomeDois.value == "") {
        if (frontEnd.checked ) {
            fraseDois.innerHTML = texto[0] + ", ";
        }
        
        if (designWeb.checked) {
            fraseDois.innerHTML = fraseDois.innerHTML + texto[1] + ",";
        }
    
        if (analistaDeSistemas.checked) {
            fraseDois.innerHTML = fraseDois.innerHTML + texto[2] + ", ";
        }
    
        if (suporteTecnico.checked) {
            fraseDois.innerHTML = fraseDois.innerHTML + texto[3] + ", ";
        }
        
        fraseDois.innerHTML = fraseDois.innerHTML + "são áreas de preferência de " + nomeDois.value;
    }
}


nomeDois.addEventListener("keyup" , checker);
frontEnd.addEventListener("click" , checker);
designWeb.addEventListener("click" , checker);
analistaDeSistemas.addEventListener("click" , checker);
suporteTecnico.addEventListener("click" , checker);