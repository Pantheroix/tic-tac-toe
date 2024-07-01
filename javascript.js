let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGbtn=document.querySelector("#newbtn");
let masgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true;
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    masgcontainer.classList.add("hide");
    count=0;
}
boxes.forEach((box)=>{
    rec=box.addEventListener("click",()=>{
    if(turnO){
    box.innerText="O";
    turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
    });
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showinner=(winner)=>{
    msg.innerText=`YOU WIN! ${winner}`;
    masgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for (pattern of winpatt){
        let postval=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;

        if (postval!=""&& post2val!=""&& post3val!=""){
            if(postval==post2val&&post2val==post3val){
                console.log("winner",postval);
                showinner(postval);
                count=-1;
            }
           
        }

    };
};
let count=0;
const checkdraw=()=>{
    boxes.forEach((box)=>{
        click=box.addEventListener("click",()=>{
            count++;
            console.log(count);
            if (count>=9){
                msg.innerText="DRAW";
                masgcontainer.classList.remove("hide")
                count=0;
            }
        });
    });
};
checkdraw();
newGbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
