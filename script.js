let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset");
let message_box=document.querySelector("#div1");
let win_para=document.querySelector("#win_para");
let new_btn=document.querySelector("#new_game");
let turn=false;
let winning_pattern=[[0,1,2],[3,4,5],[6,7,8],
                     [0,3,6],[1,4,7],[2,5,8],
                     [0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        box.innerText=turn?'X':'O';
        box.disabled=true;
        turn=!turn;
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of winning_pattern){
        const a=boxes[pattern[0]].innerText;
        const b=boxes[pattern[1]].innerText;
        const c=boxes[pattern[2]].innerText;
        if(a!=""&&b!=""&&c!=""){
            if(a==b&&b==c){
                win_para.innerText=turn?"Player 1":"Player 2";
                message_box.style.display = 'inline-block';
                console.log("winner");
                }
            }
        }
    }
const resetfn=()=>{
    for(let i of boxes){
        i.innerText="";
        i.disabled=false;
    }
    message_box.style.display = 'none';
}
resetbtn.addEventListener('click',resetfn)
new_btn.addEventListener('click',resetfn)
