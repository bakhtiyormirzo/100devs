let total = 0


document.querySelector('#pumpkin').addEventListener('click', makeZro)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#new').addEventListener('click', newFunc)

function makeZro() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function newFunc() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerText = total
}