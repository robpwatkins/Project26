function calculate () {
  const screen = document.querySelector('.screen'); 
  let screenNums = [];
  let operatorNums = [];
  let runningTotal;
  let currentOperator;
  let tempNums = [];

  function buttonNumClick (event) {
    if (event.target.textContent === '.' && tempNums.indexOf('.') !== -1) {
      tempNums.push('');
    } else {
    tempNums.push(event.target.textContent);
    screenNums = [];
    screenNums.push(Number(tempNums.join('')));
    screen.textContent = screenNums;
    }
  }
  
  function operatorClick (event) {
    tempNums = [];
    currentOperator = event.target.textContent;
    operatorNums.push(Number(screenNums.join('')));
  }

  function equalsClick () {
    operatorNums.push(Number(screenNums.join('')));
    if (currentOperator === '+') {
      runningTotal = operatorNums.reduce((a, b) => a + b);
    }
    if (currentOperator === '-') {
      runningTotal = operatorNums.reduce((a, b) => a - b);
    }
    if (currentOperator === 'X') {
      runningTotal = operatorNums.reduce((a, b) => a * b);
    }
    if (currentOperator === '/') {
      runningTotal = operatorNums.reduce((a, b) => a / b);
    }
    operatorNums = [];
    screenNums[0] = runningTotal;
    screen.textContent = runningTotal;
  }

  function plusOrMinusClick () {
    console.log('heyoo');
  }

  function moduloClick () {
    console.log(screenNums);
  }

  function decimalClick () {
    // console.log('heyoo');
  }

  function clearAC () {
    screen.textContent = '0';
    screenNums = [];
    operatorNums = [];
    runningTotal = null;
    currentOperator = null;
    tempNums = [];
  }

  document.querySelectorAll('.buttonNum').forEach(button => button.addEventListener('click', buttonNumClick));
  document.querySelectorAll('.buttonOperator').forEach(button => button.addEventListener('click', operatorClick));
  document.querySelector('.equals').addEventListener('click', equalsClick);
  document.querySelector('.AC').addEventListener('click', clearAC);
  document.querySelector('.modulo').addEventListener('click', moduloClick);
  document.querySelector('.plusOrMinus').addEventListener('click', plusOrMinusClick);
  document.querySelector('.decimal').addEventListener('click', decimalClick);
}

calculate();