

const buttons = document.querySelectorAll('button');
let number1 = "";
let operator = "";
let operatorDisplay = "";
let number2 = "";
let solution = "";
//let equation = number1 + operator;

updateDisplay = function() {
  document.getElementById("display").textContent = number1 + operatorDisplay + number2 + "=" + solution;
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(isNaN(button.id) == false && operator == "") {
      number1 += button.id;
      //equation = number1;
      updateDisplay();
    };
    if (button.id == "add" || button.id == "subtract" || button.id == "multiply" || button.id == "divide") {
      operator = button.id;
      operatorDisplay = button.textContent;
      //equation += operator;
      updateDisplay();
    }
    if(isNaN(button.id) == false && operator != "") {
      number2 += button.id;
      //equation = number1;
      updateDisplay();
    };
    if (button.id == "equals") {
      solution = operate(number1, number2, operator);
      updateDisplay();
    }
  });
});

add = (num1, num2) => {
  return num1 + num2;
}

multiply = (num1, num2) => {
  return num1 * num2;
}
  
subtract = (num1, num2) => {
  return num1 - num2;
}

divide = (num1, num2) => {
  return num1 / num2;
}
  
operate = function(numT1, numT2, action) {
  let num1 = Number(numT1);
  let num2 = Number(numT2);
  if (action == "add") {
    return(add(num1, num2));
  }
  if (action == "multiply") {
    return(multiply(num1, num2));
  }
  if (action == "subtract") {
    return(subtract(num1, num2));
  }
  if (action == "divide") {
    return(divide(num1, num2));
  }
}