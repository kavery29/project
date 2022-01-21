console.log("welcome to tic tac toe")
let music=new Audio("Voice 007.m4a")
let turn ="X"
let gameover=false;
let s1=0;
let s2=0;

const changeTurn=()=>{
    if(gameover==false){
    return turn==="X"?"0":"X"
}
if(gameover==true){
    document.getElementsByClassName("container").disabled = true;
}
}

const checkWin=()=>{
    if(!gameover){
    let boxtexts=document.getElementsByClassName('textbox');
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText!== ''){
        music.play();
        gameover=true;
        // document.querySelector('.info').innerText= boxtexts[e[0]].innerText+" Won"
        if(boxtexts[e[0]].innerText=="X"){
            document.querySelector('.info').innerText="Player 1 Wins";
            s1++;
            document.querySelector('.s1').innerText="Score: "+s1;
        }
        else{
            document.querySelector('.info').innerText="Player 2 Wins";
            s2++;
            document.querySelector('.s2').innerText="Score: "+s2;
        }
        document.getElementsByClassName('textbox').keypress(function(e) {
            e.preventDefault();
        });
    }
    })
    }
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.textbox');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' ){
            boxtext.innerText=turn;
            turn=changeTurn();
            // audioTurn.play();
            checkWin();
            // if(!gameover){
            // document.getElementsByClassName(".play .info")[0].innerText="Turn for "+turn; }
        }
    })
})

reset.addEventListener('click', ()=> {
    document.querySelector('.info').innerText="Player 1 Begins";
    let boxtexts=document.querySelectorAll('.textbox');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=''
    });
    turn="X"
    gameover=false
    // document.getElementsByClassName('.info').innerText="Player 1 begins";
})

if(gameover==true){
    Array.from(boxtexts).forEach(element=>{
        element.innerText=''
    });
}

// function disableTest(){
//         function cancel () { return false; };
//         document.getElementById("textbox").disabled = true;
//         var nodes = document.getElementById("textbox").getElementsByTagName('*');
//         console.log(nodes);
//         for (var i = 0; i < nodes.length; i++) {
//             nodes[i]
//             nodes[i].setAttribute('disabled', true);
//             nodes[i].onclick = cancel;
//         }
//     }
    // var nodes = document.getElementsByClassName("textbox").getElementsByTagName('*');
    // for(var i = 0; i < nodes.length; i++){
    //     nodes[i].disabled = true;
    // }
