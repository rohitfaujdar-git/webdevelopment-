let gamenum=25;
let answer=prompt("enter your number you have only 5 chance :");
if(answer==gamenum){
    console.log("yoy win!");
}
else{
    for(let i=0;i<4;i++){
        let answer= prompt("enter answer again!");
        if(answer==gamenum){
            console.log("you win!");
            break;
        }
    }
}