function proc(butt: HTMLButtonElement){
  input.value += butt.value
  input.style.color = `rgb(14, 100, 170)`
}
function resulting(){
  try{
      input.value = eval(input.value)
      input.style.color = 'red'
  } catch(err){
      alert('Please use valid mathimatical operations')
      input.value = ''
  }
}
function flooring(){
  input.value = ''
}

function deleting(){
  input.value = input.value
  // console.log(String(input.value).slice(input.value.length -1, input.value.length))
  input.value =String(input.value).slice(0, input.value.length-1)
  input.style.color = `rgb(14, 100, 170)`
}

const one = document.getElementById('one') as HTMLButtonElement
const two = document.getElementById('two') as HTMLButtonElement
const three = document.getElementById('three') as HTMLButtonElement 
const four = document.getElementById('four') as HTMLButtonElement
const five = document.getElementById('five') as HTMLButtonElement
const six = document.getElementById('six') as HTMLButtonElement
const seven = document.getElementById('seven') as HTMLButtonElement
const eight = document.getElementById('eight') as HTMLButtonElement
const nine = document.getElementById('nine') as HTMLButtonElement
const zero = document.getElementById('zero') as HTMLButtonElement

const lpar = document.getElementById('lpar') as HTMLButtonElement
const rpar = document.getElementById('rpar') as HTMLButtonElement
const div = document.getElementById('div') as HTMLButtonElement
const del = document.getElementById('del') as HTMLButtonElement
const mult= document.getElementById('mult') as HTMLButtonElement
const minus= document.getElementById('minus') as HTMLButtonElement
const plus = document.getElementById('plus') as HTMLButtonElement
const point = document.getElementById('point') as HTMLButtonElement
const ce= document.getElementById('ce') as HTMLButtonElement
const equal = document.getElementById('equal') as HTMLButtonElement
const input = document.querySelector('#in') as HTMLInputElement

lpar.addEventListener('click',()=> proc(lpar))
rpar.addEventListener('click',()=> proc(rpar))
div.addEventListener('click',()=> proc(div))
del.addEventListener('click',()=> deleting())
mult.addEventListener('click',()=> proc(mult))
minus.addEventListener('click',()=> proc(minus))
plus.addEventListener('click',()=> proc(plus))
point.addEventListener('click',()=> proc(point))
ce.addEventListener('click',()=> flooring())
equal.addEventListener('click',()=> resulting())

one.addEventListener('click',()=> proc(one))
two.addEventListener('click', ()=>proc(two))
three.addEventListener('click', ()=>proc(three))
four.addEventListener('click', ()=>proc(four))
five.addEventListener('click', ()=>proc(five))
six.addEventListener('click', ()=>proc(six))
seven.addEventListener('click', ()=>proc(seven))
eight.addEventListener('click', ()=>proc(eight))
nine.addEventListener('click', ()=>proc(nine))
zero.addEventListener('click', ()=>proc(zero))
input.addEventListener('keydown', function(press){if (press.keyCode === 13){ resulting()}})