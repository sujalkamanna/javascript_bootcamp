const fruits = ["apple" , "banana" , "pear"];

for (fruit in fruits){
    console.log(fruit);
};

for ( let frts of fruits){
    console.log(frts);
}

for (let i=0;i<fruits.length ;i++ ){
    console.log(fruits[i])
}