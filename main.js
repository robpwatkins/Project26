function calculate () {
  const screen = document.querySelector('.screen');
  let screenNums = [];
  let operatorNums = [];
  let runningTotal = [];
  let operatorArr = [];

  function clickButtonNum (event) {
    screenNums.push(parseInt(event.target.textContent))
    screen.textContent = screenNums;
  }
  
  function clickOperator (event) {
    operatorNums.push(screenNums[screenNums.length - 1]);
    operatorArr.push(event.target.textContent);
    screenNums = [];
  }
  
  function equals () {
    operatorNums.push(screenNums[screenNums.length - 1]);
    if (operatorArr[operatorArr.length - 1] === '+') {
      runningTotal[0] = operatorNums.reduce((a, b) => {
        return a + b;
      })
    } else
    if (operatorArr[operatorArr.length - 1] === '-') {
      runningTotal[0] = operatorNums.reduce((a, b) => {
        return a - b;
      })
    } else
    if (operatorArr[operatorArr.length - 1] === 'X') {
      runningTotal[0] = operatorNums.reduce((a, b) => {
        return a * b;
      })
    } else
    if (operatorArr[operatorArr.length - 1] === '/') {
      runningTotal[0] = operatorNums.reduce((a, b) => {
        return a / b;
      })
    }
    screenNums = runningTotal;
    operatorNums = [];
    screen.textContent = runningTotal;
  }
  
  document.querySelectorAll('.buttonNum').forEach(button => button.addEventListener('click', clickButtonNum))
  document.querySelectorAll('.buttonOperator').forEach(button => button.addEventListener('click', clickOperator))
  document.querySelector('.equals').addEventListener('click', equals)
  document.querySelector('.AC').addEventListener('click', clearScreen)

  function clearScreen () {
    screen.textContent = '';
    screenNums = [];
    operatorNums = [];
    runningTotal = [];
    operatorArr = [];
  }
}

calculate();