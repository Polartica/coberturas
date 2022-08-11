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


var myTableDiv = document.getElementById("myDynamicTable");
  
var table = document.createElement('TABLE');
table.border = '1';

var tableBody = document.getElementById("tableBody");
table.appendChild(tableBody);

function getvals(){
    return fetch("https://raw.githubusercontent.com/Polartica/coberturas/main/TrioVerde.csv",
    {method: "GET"})
    
    .then((response) => response.text())
    .then((responseData) => {
    data =  responseData.split('\n');
    len = data.length

    div = getClientBySetor(code.value, data, len)
    
    for (var i = 0; i < div.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (let x = 0; x < 10; x++) {
            for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(div[i].split(';')[x]));
                tr.appendChild(td);
              }
        }
      }
      myTableDiv.appendChild(table);


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


function show(text) {
    if(text === undefined){
        msg.innerHTML = "Código não encontrado"
    }
    else {
        text = text.split(';')
        console.log(text[0])
        codigo.appendChild(document.createTextNode(codigo[0]))
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

function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 7; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("Cell " + i));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
