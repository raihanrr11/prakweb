// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to append value to display
function append(value) {
  document.getElementById('display').value += value;
}

// Function to calculate the result
function calculate() {
  let expression = document.getElementById('display').value;
  expression = expression.replace('^', '**'); // Replace ^ with ** for exponentiation
  try {
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
