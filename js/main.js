var radios = document.getElementsByName("material")

document.getElementById("btnCalc").onclick = checkRadios

function checkRadios(){

    let material

    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            material = radios[i].id
            break
        }
    }

    console.log(material)
    setCalc(material)

}

function setCalc(material){

    switch(material){
        case "palmitato":
            calc(1200)
            break
        case "silicone":
            calc(1000)
            break
        case "essencia":
            calc(250)
            break
        case "corante":
            calc(7)
            break
    }

}

function imprimir(resultados){
    
    let indice = 0
    let saidas = document.getElementsByTagName("td")
    
    for(resultado of resultados){
        saidas[indice].innerHTML = (function(){ return Number.isInteger(resultado) ? resultado : resultado.toFixed(2) })()
        indice++
    }
}

function calc(material){

    let valorInformado = Number(document.getElementById("valor").value)
    let palmitato = valorInformado * 1200 / material
    let silicone = valorInformado * 1000 / material
    let essencia = valorInformado * 250 / material
    let corante = valorInformado * 7 / material

    imprimir([palmitato, silicone, essencia, corante])
}