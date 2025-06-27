// week planner using switch case
let a;
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter day of the week :" , (answer) =>{
    a = answer;
    console.log("You Entered :",a);
    switch (a) {
    case "monday":
        console.log("Go to the gym");
        break;
    case "tuesday":
        console.log("Attend a coding meetup");
        break;
    case "wednesday":
        console.log("Relax and read");
        break;
    case "thursday":
        console.log("Play video games");
        break;
    case "friday":
        console.log("Watch a movie");
        break;
    case "saturday":
        console.log("Hang out with friends");
        break;
    case "sunday":
        console.log("Prep for the week ahead");
        break;
    default :
        console.log("invalid day!");
    break;
}
    rl.close()
});

