function fact(){
const prompt = require("prompt-sync")();
const n = Number.parseInt(prompt("Enter the value to calculate factorial:"))

result = 1;
for (i=1 ; i<=n ; i++){
    result = result*i

}
return result
}

console.log("The vlaue of factorial is :",fact())