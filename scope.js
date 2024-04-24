let Userscore=0;
let Computerscore=0;
const Access=document.querySelectorAll(".demand");
const message=document.querySelector("#res");
const userpara=document.querySelector("#update")
const comppara=document.querySelector("#com-score")


const getcomputerChoice=()=>{
    //it genrate a choices stone paper scissor
    const options=["rock","paper","scissor"]; // in array we can acces the string with help of idx
   const randch=Math.floor(Math.random(options)*3); 
   // this math function genreates a random whole number math.random but it return value in float array doest not
   //support floating idx so we can use math floor() function
     return options[randch]; //access the idx
}

const GameDraw=()=>{
    // console.log("Amazing you both are choose same ");
    // message.innerText="you Both are Equal";
    // message.style.backgroundColor="purple"
}

const shoWinner=(Userwin,Userchoice,Compchoice)=>{
    if(Userwin){
        Userscore++;
        
        userpara.innerText=Userscore;
        if(Userscore===5){
            for(let i=0;i<=5;i++){
               
                
            }
            alert("Human winner");
            // console.log("Congratulations");
           
        }
        
        // else{
            
        // }
       
        console.log("You are winner :)");
        message.innerText=`you win ! your ${Userchoice} beats ${Compchoice}`
        message.style.backgroundColor="green"
    }else{
        Computerscore++;
        comppara.innerText= Computerscore;
        if(Computerscore===5){
            for(let i=0;i<=5;i++){             
            }
            alert("AI winner");          
        }else{
            console.log("Try again");
        }

    // console.log("OOPS Better Luck Next Time :(");
       message.innerText=`you loss ${Compchoice} beats your ${Userchoice}`;
       message.style.backgroundColor="red"
    }

}
       const playGame=(Userchoice)=>{
    //    console.log("Userchoice =",Userchoice);
        //user choice
        // computer choice  -->modular means har ek kam ke liye ek function create karna
        //small parts perform a one action  it helps to resuseble in future scope    
        const Compchoice=getcomputerChoice();
        // console.log("compchoice =",Compchoice);

        if(Userchoice===Compchoice){
            GameDraw();
        }
        else{
            let UserWin=true;
            if(Userchoice==="rock"){
        //  choice     scissor ,paper 
                UserWin=Compchoice==="paper"?false:true;// ternary operater
            }
            else if(Userchoice==="paper"){
                   //  choice     rock scisoor
                UserWin=Compchoice==="scissor"?false:true;
            }  else{
                 //  choice   rock ,paper
                    UserWin=Compchoice==="rock"?false:true;
            } 
            shoWinner(UserWin,Userchoice,Compchoice);     
           }
};

     Access.forEach((evt)=>{
    console.log(evt);
    evt.addEventListener("click",()=>{
    const Userchoice=evt.getAttribute("id");
   
    playGame(Userchoice);
   
});
 });



   
 
 