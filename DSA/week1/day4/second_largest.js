arr = [10,4,64,897,65,8,5,8]
let max = -Infinity;
let second = -Infinity;

for (let num of arr) {
  if (num > max) {
      second = max;
      max = num;
  }
  else if(num> second && num!==max){
    second = num;
  }
}
console.log(second)