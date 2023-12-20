let boxes=document.querySelectorAll("button");
let message=document.querySelector("#mymsg");
let msgContainer=document.querySelector(".msg")

let turnO= true;

const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
        box.innerText="O";
        turnO=false;
     }   
     else{
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     checkwinner();
    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showwinner=(hello)=>{
message.innerText=`CONGRATULATION, YOUR WINNER IS ${hello}`;
msgContainer.classList.remove("hide");
disablebox();

}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""  && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
            }
        }
    }
}

