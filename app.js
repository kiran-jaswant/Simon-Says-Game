let gameSeq = [] ;
let userSeq = [] ;

let btns=["red","green","violet","blue"]

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started")
    }

    started = true;
    levelUp();
    
})

function levelUp(){
    level++ ;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor =btns[randomIdx] ;

    let randomBtn=document.querySelector(`.${randomColor}`);

    btnFlash(randomBtn);

}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
   
}

function btnPress(){
    let btn= this;
    btnFlash(btn);
}

let buttons = document.querySelectorAll(".box");
 for(btn of buttons){
    btn.addEventListener("click",btnPress);
 }