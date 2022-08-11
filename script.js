var form = document.getElementById("form");
var code = document.getElementById('code')
var msg = document.getElementById('msg')

var codigo = document.getElementById('codigo')
var cliente = document.getElementById('cliente')
var spaten =document.getElementById('Spaten');
var becks = document.getElementById('Becks')
var stella = document.getElementById('Stella')
var soma = document.getElementById('Soma')
var contagem = document.getElementById('Contagem')


function getvals(){
    return fetch("https://raw.githubusercontent.com/Polartica/coberturas/main/TrioVerde.csv",
    {method: "GET"})
    
    .then((response) => response.text())
    .then((responseData) => {
    data =  responseData.split('\n');
    len = data.length

    div = getClientByCode(code.value, data, len)
    show(div)

    
    })
}

// FUNCAO ACHA CODIGO DO CLIENTE NA LISTA DE CLIENTESS
function getClientByCode(code, list,len) {
    for (let i = 0; i < len; i++) {
        if (list[i].split(';')[0] == code) {
            console.log(list[i])
                return list[i]
            }
        }
    }


function show(text) {
    if(text === undefined){
        msg.innerHTML = "Código não encontrado"
    }
    else {
        text = text.split(';')
        codigo.innerHTML = text[0]
        cliente.innerHTML = text[1]
        spaten.innerHTML = text[5]
        stella.innerHTML = text[6]
        becks.innerHTML = text[7]
        soma.innerHTML = text[8]
        contagem.innerHTML = text[9]
    }
}

// PEGA INPUT E REPASSA PARA GET VALS QUE PEGA O CSV E PASSA VALOR PARA GET CLIENT BY CODE
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");
    
    getvals()
});


