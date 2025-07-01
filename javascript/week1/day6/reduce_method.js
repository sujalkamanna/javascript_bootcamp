// reduce() = this method reduces the value of array to a single digit
//addition of prices in array
const prices = [5,30,80,15,20]

const total = prices.reduce(summ)

function summ(accumulator,element){
    return accumulator+element
}
console.log(`total price is : ${total}`)


const grades = [75,15,90,18,65,95]

function max_function(accumulator , element){
    return Math.max(accumulator,element)
}
const max_grade = grades.reduce(max_function)
console.log(max_grade)