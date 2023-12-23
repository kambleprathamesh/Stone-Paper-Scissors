let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let uScore=document.querySelector("#userScore");
let cScore=document.querySelector("#compScore");
let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let score_board=document.querySelector(".score-board");


let userScore=0;
let compScore=0;
let userWin=true;


let draw=()=>{
    msg.innerText=`opps!Game Draw`;
    msg.style.backgroundColor="#183446";
    msg.style.color="#ffff";
   score_board.classList.add("common");
   player2.classList.remove("C_Score");
   player1.classList.remove("U_Score");
}

const showWinner=(userWin,uChoice,cChoice)=>{
    if(userWin===true){
     msg.innerText=`Congrats! You won ${uChoice} beats ${cChoice}`;
     msg.style.backgroundColor="#32cd32";
     msg.style.color="#022F40";
     userScore++;
     uScore.innerText=userScore;
     player1.classList.add("U_Score");
     player1.classList.remove("user");
     player2.classList.add("comp");
     player2.classList.remove("C_Score");

    
    }else{
     msg.innerText=` Sad You Lose ${cChoice} beats ${uChoice} `;
     msg.style.backgroundColor="#fb00006a";
     msg.style.color="#022F40";
     compScore++;
     cScore.innerText=compScore;
     player2.classList.add("C_Score");
     player2.classList.remove("comp");
     player1.classList.add("user"); 
     player1.classList.remove("U_Score");

    }
}
const compChoice=()=>{
    let compOption=["rock","paper","scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return compOption[randomIdx];
}
const playGame=(uChoice)=>{
    console.log(`user choice=${uChoice}`);
    let cChoice = compChoice();
    console.log(`computer Choice= ${cChoice}`);
    if(uChoice===cChoice){
        draw();
    }else{
        if(uChoice==="rock"){
           userWin=cChoice==="paper"?false:true;
       } else if(uChoice==="paper"){
        userWin=cChoice==="rock"?true:false;
       }else{
        userWin=cChoice==="rock"?false:true;
        }
      showWinner(userWin,uChoice,cChoice);
    }  
}

choices.forEach((option)=>{
    option.addEventListener("click",()=>{
        // console.log("choice was clicked");
        let userChoice=option.getAttribute("id");
        // console.log(`choice of the user = ${userChoice}`);
        playGame(userChoice);
    })
})



