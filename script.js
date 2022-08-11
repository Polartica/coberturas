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


var myTableDiv = document.getElementById("divtable");
var table = document.getElementById("tableBody");

function getvals(){


    return fetch("https://raw.githubusercontent.com/Polartica/coberturas/main/TrioVerde.csv",
    {method: "GET"})
    
    .then((response) => response.text())
    .then((responseData) => {
    data =  responseData.split('\n');
    len = data.length
    
    
    div = getClientBySetor(code.value, data, len)
    
    show(div)


    })
}

// FUNCAO ACHA CODIGO DO CLIENTE NA LISTA DE CLIENTESS
// function getClientByCode(code, list,len) {
//     for (let i = 0; i < len; i++) {
//         if (list[i].split(';')[0] == code) {
//             console.log(list[i])
//                 return list[i]
//             }
//         }
//     }

function getClientBySetor(code, list,len) {
    var lista = []
    for (let i = 0; i < len; i++) {
        if (list[i].split(';')[2] == code) {
            lista.push(list[i])  
            } 
        }
    return lista
    }


function show(div) {
    console.log(div)
    if(div.length == 0) {
        msg.innerHTML = "Codigo inválido"
    }
    for (var i = 0; i < div.length; i++) {
        var tr = document.createElement('TR');
        table.appendChild(tr);
        for (let x = 0; x < 10; x++) {
            for (var j = 0; j < 1; j++) {
                
                var td = document.createElement('TD');
                if (i%2 == 0 ) {
                    td.classList.add("black")
                } else {td.classList.add("table-active")}
                td.appendChild(document.createTextNode(div[i].split(';')[x]))
                if(x == 1){
                    td.classList.add("larger")
                };
                tr.appendChild(td);
                console.log(div[i])
              }
        }
      }
      myTableDiv.appendChild(table);
}



// PEGA INPUT E REPASSA PARA GET VALS QUE PEGA O CSV E PASSA VALOR PARA GET CLIENT BY CODE
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");

    getvals()

});

