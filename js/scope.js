let a = 1;  //global scope


function scope(){
    let  b=2  // function scope
    // console.log(b, "inside function")
}



scope()

function changeColor(){
const newvar = document.getElementById('hello')
newvar.innerText = "hello from js dom"
newvar.style.backgroundColor = "red"
newvar.style.textAlign = 'center'
}


