var form = document.getElementById("form");
var code = document.getElementById('code')
var td = document.getElementById('td')
var td1 = document.getElementById('td1')
var td2 = document.getElementById('td2')
var td3 = document.getElementById('td3')
var td4 = document.getElementById('td4')
var td5 = document.getElementById('td5')
var td6 = document.getElementById('td6')
var td7 = document.getElementById('td7')
var td8 = document.getElementById('td8')
var td9 = document.getElementById('td9')

    // FUNCAO ACHA CODIGO DO CLIENTE NA LISTA DE CLIENTESS

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

function getClientByCode(code, list,len) {
    for (let i = 0; i < len; i++) {
        if (list[i].split(';')[0] == code) {
            console.log(list[i])
                return list[i]
            }
        }
    }

function show(div) {
    div = div.split(';')
    td.innerHTML = div[0]
    td1.innerHTML = div[1]
    td2.innerHTML = div[2]
    td3.innerHTML = div[3]
    td4.innerHTML = div[4]
    td5.innerHTML = div[5]
    td6.innerHTML = div[6]
    td7.innerHTML = div[7]
    td8.innerHTML = div[8]
    td9.innerHTML = div[9]
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");

    getvals()

});