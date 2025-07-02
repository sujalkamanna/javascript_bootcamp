//rest operator
const arr1 = ["ten", "twenty", "thirty"];
const arr2 = [...arr1];
console.log(arr2);

const food1 = "apple";
const food2 = "banana";
const food3 = "pear";


function fridge(...foods) {
  console.log(foods);
}

// foods = [...food1,...food2,...food3]
fridge(food1,food2,food3)


function sum(...numbers){
    let results = 0;
    for(let no of numbers){
        results+=no
    }
    return results
    }
const total = sum(1,2,3,4,5)
console.log(total)