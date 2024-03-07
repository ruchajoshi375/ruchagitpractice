function MathOperation(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // Using the higher-order function to perform various operations
  console.log("Addition:", MathOperation(5, 4, add));    
  console.log("Subtraction:", MathOperation(5, 4, subtract)); 
  console.log("Multiplication:", MathOperation(5, 4, multiply)); 
  console.log("Division:", MathOperation(10,5, divide));  
  console.log("Division by zero:", MathOperation(55, 0, divide));
  