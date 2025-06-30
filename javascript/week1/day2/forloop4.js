//for loop ++i and i++

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("\n");
for (let i = 0; i < 5; ++i) {
  console.log(i);
}

let obj = {
  key1: "this is key 1",
  key2: "2",
  key3: "3",
};
len = Object.keys(obj).length
console.log("Length of obj is:",len)
keys = Object.keys(obj)
for (let i =0;i<len;i++){
    console.log(keys[i] , obj[keys[i]])
}

for ( let key in obj){
  console.log(key,obj[key])
}