
function somar(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('Resultado')

    var somar = n1 + n2

    resultado.innerText = somar
}
function subtrair(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('Resultado')
    
    var subtrair = n1 - n2

    resultado.innerText = subtrair
}
function multiplicar(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('Resultado')

    var multiplicar = n1 * n2

    resultado.innerText = multiplicar
}
function dividir(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('Resultado')
    if (n2 === 0){
        resultado.innerText = "Não se divide por zero"
    } else {
        var dividir = n1/n2
        resultado.innerText = dividir
    }    
}
