let gamenum=25;
let usernum=prompt("Guess the game number:");
while(usernum!=gamenum){
    usernum=prompt("ypu entered wrong number.Guess again");
}

console.log("congratulation,you entered the right number");