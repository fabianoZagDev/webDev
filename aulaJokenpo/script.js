function escolhaComp(){
    const jokenpo = ['Pedra','Papel','Tesoura']
    let numeroaleatorio = Math.floor(Math.random()*jokenpo.length)
    return jokenpo[numeroaleatorio]
}

function Jogar(escolhaUsuario){
    let escolhaPC = escolhaComp()
    let resultado 

    if(escolhaUsuario === escolhaPC){
        resultado = "Empate"
    }
    else if (
        (escolhaUsuario === 'Pedra' && escolhaPC === 'Tesoura')
        || (escolhaUsuario === 'Papel' && escolhaPC === 'Pedra')
        || (escolhaUsuario === 'Tesoura' && escolhaPC === 'Papel')
    ){
        resultado = "Vitória do Usuário"
    }
    else{
        resultado = "Vitória da máquina"
    }
    
    document.getElementById('resultado').innerText = resultado
}   
