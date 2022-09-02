var video1 = document.getElementById("video1"); 
var video2 = document.getElementById("video2"); 
var video3 = document.getElementById("video3"); 
var video4 = document.getElementById("video4"); 
var video5 = document.getElementById("video5"); 


//play/pause
function playPause1(){ 
    if(video1.paused) 
        video1.play(); 
    else
        video1.pause(); 
}
function playPause2(){ 
    if(video2.paused) 
        video2.play(); 
    else
        video2.pause(); 
}
function playPause3(){ 
    if(video3.paused) 
        video3.play(); 
    else
        video3.pause(); 
}
function playPause4(){ 
    if(video4.paused) 
        video4.play(); 
    else
        video4.pause(); 
}
function playPause5(){ 
    if(video5.paused) 
        video5.play(); 
    else
        video5.pause(); 
}



//zoom

//ampliar
function ampliar1(){
    video1.width = 850;
}
function ampliar2(){
    video2.width = 850;
}
function ampliar3(){
    video3.width = 850;
}
function ampliar4(){
    video4.width = 850;
}
function ampliar5(){
    video5.width = 850;
}

//reduzir
function reduzir1(){
    video1.width = 410;
}
function reduzir2(){
    video2.width = 410;
}
function reduzir3(){
    video3.width = 410;
}
function reduzir4(){
    video4.width = 410;
}
function reduzir5(){
    video5.width = 410;
}

//tamanho normal
function tamanhoNormal1(){
    video1.width = 650;
}
function tamanhoNormal2(){
    video2.width = 650;
}
function tamanhoNormal3(){
    video3.width = 650;
}
function tamanhoNormal4(){
    video4.width = 650;
}
function tamanhoNormal5(){
    video5.width = 650;
}

//tela cheia
function telaCheia1(){
    video1.requestFullscreen(); 
}
function telaCheia2(){
    video2.requestFullscreen(); 
}
function telaCheia3(){
    video3.requestFullscreen(); 
}
function telaCheia4(){
    video4.requestFullscreen(); 
}
function telaCheia5(){
    video5.requestFullscreen(); 
}



//volume

//+
function aumentarVolume1(){
    video1.volume += 0.1;  
}
function aumentarVolume2(){
    video2.volume += 0.1;  
}
function aumentarVolume3(){
    video3.volume += 0.1;  
}
function aumentarVolume4(){
    video4.volume += 0.1;  
}
function aumentarVolume5(){
    video5.volume += 0.1;  
}

//-
function diminuirVolume1(){
    video1.volume -= 0.1;
}
function diminuirVolume2(){
    video2.volume -= 0.1;
}
function diminuirVolume3(){
    video3.volume -= 0.1;
}
function diminuirVolume4(){
    video4.volume -= 0.1;
}
function diminuirVolume5(){
    video5.volume -= 0.1;
}

//x
function mudo1(){
    if(video1.muted == false) 
        video1.muted = true;
    else
        video1.muted = false;
}
function mudo2(){
    if(video2.muted == false) 
        video2.muted = true;
    else
        video2.muted = false;
}
function mudo3(){
    if(video3.muted == false) 
        video3.muted = true;
    else
        video3.muted = false;
}
function mudo4(){
    if(video4.muted == false) 
        video4.muted = true;
    else
        video4.muted = false;
}
function mudo5(){
    if(video5.muted == false) 
        video5.muted = true;
    else
        video5.muted = false;
}




