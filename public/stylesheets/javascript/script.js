placeTotal()


function jRead(file, callback) {
    const jFile = new XMLHttpRequest();
    jFile.overrideMimeType("application/json")
    jFile.open("GET", file, true)
    jFile.onreadystatechange = function () {
        if (jFile.readyState === 4 && jFile.status == "200") {
            callback(jFile.responesText)
        }
    }
    jFile.send(null)
}

function bars() {
    console.log('hello')
    const bars = document.getElementsByClassName('bar')
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.height = data[i].amount + "px"
    }
}

async function placeTotal() {
    var bal = 0
    fetch('data.json')
    .then(res => res.json())
        .then(data => {

            for (var i = 0; i < data.length; i++) {
                bal += data[i].amount
            }
            
            document.querySelector("#headingBalance").innerText = "$" + bal
        }) 
        
}
