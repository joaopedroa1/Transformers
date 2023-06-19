const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos":{
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    }, 
    "blindagem":{
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas" :{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes":{
        "forca": 0,
        "poder": 28 ,
        "energia": 0,
        "velocidade": -2,
    }
}


const controle = document.querySelectorAll(".controle-ajuste") //Caso fosse utilizado o método com a data, dentro dos parenteses estaria escrito [data-controle]

controle.forEach((elemento) =>{
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode) //Caso fosse utilizado o método c a data, seria evento.target.dataset.controle, ao invés de textContent
        atualizaEstatistica(evento.target.dataset.peca,)
    })
})

somar.addEventListener("click", () =>{
    manipulaDados("somar")
});

subtrair.addEventListener("click", () =>{
    manipulaDados("subtrair")
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador") //para se referir a uma classe, utilizar o ".", para se referir a uma ID, utilizar a #
    if (operacao === "-"){
        peca.value = parseInt(peca.value) -1
    } else{
        peca.value = parseInt(peca.value) +1
    }
}

function atualizaEstatistica(peca) {



    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}
