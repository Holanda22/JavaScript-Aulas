var meuVideo = document.getElementById("playerCustomizado"); //a variável guarda o id de um elemento do html a partir de seu id, neste caso essa variável guarda o vídeo

//funções são o equivalente dos métodos 

function playPause(){ //ação que será colocada dentro de um botão do site
    if(meuVideo.paused) //as ações de pausar e dar play já existem no JS, basta declará-las
        meuVideo.play(); //dará play no vídeo se estiver pausado
    else
        meuVideo.pause(); //se já estiver rodando, vai pausar
}

function ampliar(){
    meuVideo.width = 650; //altera o tamanho do vídeo
}

function reduzir(){
    meuVideo.width = 300;
}

function tamanhoNormal(){
    meuVideo.width = 410;
}

function telaCheia(){
    meuVideo.requestFullscreen(); //método já estabelecido do JS de pedir para preencher toda tela
}

function aumentarVolume(){
    meuVideo.volume += 0.1; //altera o volume de pouco em pouco 
}

function diminuirVolume(){
    meuVideo.volume -= 0.1;
}

function mudo(){
    if(meuVideo.muted == false) //se o vídeo não estiver mutado, será mutado, se estiver, sairá do mute
        meuVideo.muted = true;
    else
        meuVideo.muted = false;
}

function opniao(){
    var x;
    var nome;

    var nome = prompt("Deixe seu nome: "); //o prompt tem a função de ler o que o usuário digita
    var x = prompt("Deixe sua nota pelo vídeo: ");

        alert("Olá! " + nome + " você deu " + x + " estrelas"); //mostra na tela um alerta escrito
}
