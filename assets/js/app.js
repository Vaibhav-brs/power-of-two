function checkPowerOfTwo() {
    const number = document.getElementById("number").valueAsNumber;
  
    if (isPowerOfTwo(number)) {
      displayResult(`${number} is a power of two.`);
    } else {
      displayResult(`${number} is not a power of two.`);
    }
  }
  
  function isPowerOfTwo(number) {
    return number && (number & (number - 1)) === 0;
  }
  
  function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = message;
  }
  