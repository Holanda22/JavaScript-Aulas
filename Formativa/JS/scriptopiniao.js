function opiniao(){
    var x;
    var nome;
    var idade;

    var nome = prompt("Digite seu nome: "); 
    var idade = prompt("Digite sua idade: ")
    var x = prompt("De 1 a 10, quanto você gostou desse site? ");

    if(x >= 7){
        alert(nome + ", " + idade + " anos, você nos deu nota " + x + " obrigada por sua resposta! Thiaguinho agradece!" );
    }
    else if(x < 7){
        var feedback = prompt("Sentimos muito por te decepcionar :( \nComo podemos melhorar?")
    }
}