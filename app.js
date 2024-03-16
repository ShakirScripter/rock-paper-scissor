
let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

let userScorepara=document.querySelector("#user_score");
let compScorepara=document.querySelector("#computer_score");


const getCompChoice=()=>{
    const options=["rock","paper","scissor"];

    const compChoice=Math.floor(Math.random() * 3);
    return options[compChoice];
};

const drawgame=()=>{
    msg.innerHTML="Game was draw! play again";
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorepara.innerHTML=userscore;
        msg.innerHTML=`you win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compScorepara.innerHTML=computerscore;
        msg.innerHTML=`you lose!  ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playame=(userchoice)=>{

    //computer choice 
    const compChoice=getCompChoice();
    

    if(userchoice === compChoice){
        drawgame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
          userWin=compChoice==="scissor"?false:true;
        }else if(userchoice==="paper"){
          userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userchoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playame(userchoice);
    })
})