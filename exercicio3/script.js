let arrayNum = [10,2,5,9]
let arrayString = ["eu", "ele", "nós"]
let arraysNSB = ['vós',11,false]

let arrayNumCopia = arrayNum.slice()
let arrayStringCopia = arrayString.slice()
let arraysNSBCopia = arraysNSB.slice()

console.log(arrayNumCopia, arrayNum)
arrayNumCopia.push(7)
console.log(arrayNumCopia,)


arrayString.pop()
console.log(arrayString)
console.log(arrayStringCopia)

arraysNSB.splice(1,1)

console.log(arraysNSB, arraysNSBCopia)
