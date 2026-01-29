let a = 10;
for (let i = 0; i < 10; i++) {
  a += 1;
}

console.log(a);

let b = 0;

while (b <= 5) {
  console.log(b, "inside while");
  b++;
}

do {
  b++;
  if (b === 3) {
    console.log("3 break");
    continue;
  }
  console.log(b);
} while (b <= 5);



const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

 function calculation (j,k,operation){
 return operation(j,k)
}

const finalresult = calculation(20,30,sub)
console.log(finalresult)