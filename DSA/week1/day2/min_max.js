arr = [1, 2, 5, 10, 15, 20, 25];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log("Length of arrays is :", arr.length);

function rev(array) {
  (left = 0), (right = arr.length - 1);

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
  return arr;
}
console.log(rev(arr));
