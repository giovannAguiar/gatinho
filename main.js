const imgDançando =document.getElementById("imgDançando");
const btnLigar =document.getElementById("btnLigar");
const btnDesligar =document.getElementById("btnDesligar");

btnLigar.addEventListener('click', ()=>{
    imgDançando.src = "./img/sassy-cat.gif";
});

btnDesligar.addEventListener('click', ()=>{
    imgDançando.src = "./img/maria-aristocats.gif";
});