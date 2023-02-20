const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const  input =  document.querySelector('.inputSqr')
const lpar = document.querySelector('.lpar')
const rpar = document.querySelector('.rpar')
const div = document.querySelector('.div')
const multi = document.querySelector('.multi')
const sub = document.querySelector('.sub')
const add = document.querySelector('.add')
const point = document.querySelector('.point')
const eq = document.querySelector('.eq')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del')

// registering all the buttons and the input section


const showing = function(x){
    input.value += x.value
}
// this function simplely will display each respective button character
// in the input
const result = function(){
    {
        try{input.value = eval(input.value)}catch{
            alert('Please, use mathematical operations')
            input.value = ''}}
}
// the function that calculates the operation and returns the result

zero.addEventListener('click', ()=>showing(zero))
one.addEventListener('click', ()=>showing(one))
two.addEventListener('click', ()=>showing(two))
three.addEventListener('click', ()=>showing(three))
four.addEventListener('click', ()=>showing(four))
five.addEventListener('click', ()=>showing(five))
six.addEventListener('click', ()=>showing(six))
seven.addEventListener('click', ()=>showing(seven))
eight.addEventListener('click', ()=>showing(eight))
nine.addEventListener('click', ()=>showing(nine))
lpar.addEventListener('click', ()=>showing(lpar))
rpar.addEventListener('click', ()=>showing(rpar))
div.addEventListener('click', ()=>showing(div))
multi.addEventListener('click', ()=>showing(multi))
sub.addEventListener('click', ()=> showing(sub))
add.addEventListener('click', ()=>showing(add))
point.addEventListener('click', ()=>showing(point))
// event listeners in the mainstream buttons 
// they call the showing function 


eq.addEventListener('click', ()=> result())
input.addEventListener('keydown', function(pressing){
    if(pressing.keyCode=== 13){
        result()
    }
})
// they return the result while clicked or pressed (enter)

del.addEventListener('click', ()=>{
    input.value = String(input.value).slice(0,input.value.length -1)})
// just deletes the last button character 

ce.addEventListener('click', ()=>{input.value = ''})
// clears the input completely