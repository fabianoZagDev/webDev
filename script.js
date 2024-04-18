function calcular(){
    var livros = parseInt(document.getElementById("numBooks").value);

   
    if (livros <= 7){
        document.getElementById("resultado").innerText = `O preço total será R$${livros * 22},00`
    }
    else{
    document.getElementById("resultado").innerText = `O preço total será R$${livros * 15},00`
    }   
}