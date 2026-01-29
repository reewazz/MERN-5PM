const numbers = [1, 2, 3, 4, 5, 6, 7];

const user = [
  {
    id : 1,
    name: "riwaj",
    age: 16,
    subject : ["math","science"]
  },
  {
    id:2,
    name: "neupane",
    age: 20,
    subject : ["physics","nepali"]

  },
];



function double(num) {
  return num * 2;
}

// numbers.forEach(function (num){
//     console.log(num)
// })

const oldarray = numbers.forEach((item, index) => item * 2);

const newmappedarray = numbers.map((item, index) => item * 2);

console.log(oldarray, "foreach");
console.log(newmappedarray, "map");

const usermap = user.flatMap((item,index)=> item.subject)
console.log(usermap)

const evennumbers = numbers.filter((item,index) =>item > 5 )
console.log(evennumbers)


