console.log("Hello World");
let p=0;
    let c=0;
function getcomputerchoice(){
    let x =Math.floor((Math.random()*3)+1);
    return x;
   
}
function getplayerchoice(){
    let x;
    console.log("Choose one of the following: ");
    console.log("rock,paper or scissor");
    console.log("Please type your choise as written above or it won't be taken");
    x=prompt();
    if(x=="rock"){
        return "1" 
     }
     else if (x=="paper"){
        return "2"
     }
     else if(x=="scissor"){
        return "3"
     }
   
    return x;
}
function computewinner(x,y){
    if(x==1&&y==3||x==2&&y==1||x==3&&y==2){
        p+=1;
        return 1;}
    else if(x==3&&y==1||x==1&&y==2||x==2&&y==3){
        c+=1;
        return 2;
    }
    else if(x==1&&y==1||x==2&&y==2||x==3&&y==3){
        return 0;
    }
}
function score(){
    console.log("Your score is:"+p+" "+"Computer score is:"+c);
}
function finalscore(){
    if(c==5){
        c=0;
        p=0;
        return "Computer Won!!"
    }
    else if(p==5){
        c=0;
        p=0;
        return "You Won!!!"
    }
}
function main(){
    while(c!=5&&p!=5){
    let y=getcomputerchoice();
    let x=getplayerchoice();
    let z=computewinner(x,y);
    if(z==1){
        console.log("you win this round!!")
    }
    if(z==2){
        console.log("Computer win this round!!")
    }
    if(z==0){
        console.log("It is a Tie!!")
    }
    score()}
    console.log(finalscore());

}
main();