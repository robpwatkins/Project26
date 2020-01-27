const screen = document.querySelector('.screen');
let screenNums = [];
let operatorNums = [];





document.querySelectorAll('.buttonNum').forEach(button => button.addEventListener('click', clickButtonNum))
document.querySelectorAll('.buttonOperator').forEach(button => button.addEventListener('click', clickOperator))
document.querySelector('.equals').addEventListener('click', equals);


function clickButtonNum (event) {
  screenNums.push(event.target.textContent)
  screen.textContent = screenNums.join('');
}

function clickOperator () {
  operatorNums.push(screenNums.join(''));
  screenNums = [];
  console.log(operatorNums);
}

function equals () {
  console.log(operatorNums);
}