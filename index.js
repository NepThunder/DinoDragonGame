let score=0;
let cross=true;

let audio=new Audio('music.mp3');
let audiogo= new Audio('gameover.mp3');

setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown=function(e){
    console.log("key code is",e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('dinoAni');
        setTimeout(()=>{
            dino.classList.remove('dinoAni')
        },700);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left =(dinoX+125+"px");
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left =(dinoX-125+"px");
    }
}
setInterval(()=>{
    let dino=document.querySelector('.dino');
    let gameOver=document.querySelector('.gameOver');
    let obstacle=document.querySelector('.obstacle');

    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    let ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    let oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offSetX=Math.abs(dx - ox);
    offSetY=Math.abs(dy - oy);
    
    if(offSetX < 155 && offSetY < 100){
        gameOver.innerHTML ="Game Over, Play it Again!";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();

        },1000);
    }else if(offSetX<100 && cross){
        score += 1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur - 0.1;
            obstacle.style.animationduration =newDur +'s';
        },500);
    }
},10)
function updateScore(score){
    scoreCount.innerHTML = "Score:"+ score;
}