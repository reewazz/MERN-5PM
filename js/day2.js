
let firstArray = ["watermelon","apple","banana"]
const secondarray = ["carrot","tomato"]

// firstArray.sort()
// console.log(firstArray.sort())
// console.log(firstArray.reverse())

for(let i =0; i<firstArray.length;i++){
    console.log(firstArray[i],i)
}

console.log(firstArray,"before push")
// firstArray.push("dragonfruit")  
// firstArray.pop()  
// console.log(firstArray,"after pop")
console.log(firstArray.toString())


// firstArray.shift()
console.log(firstArray)

// const newarray = firstArray.concat(secondarray)
// console.log(newarray)


 const slicedArray = firstArray.slice(0,1)
 console.log(slicedArray);


 const isincluded = firstArray.includes("watermelonsssss")
 console.log(isincluded)



 let tasks = []

function addtask(){
   let task = prompt("enter any task")
   console.log(task)
}


