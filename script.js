window.addEventListener('DOMContentLoaded', (event) => {
    const convertButton = document.getElementById('convert');
    const reverseButton = document.getElementById('reverse');
    const resetButton = document.getElementById('reset');
    const inputField = document.getElementById('inputfield');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const inputLabel = document.querySelector('.InputSection label');
    const resultLabel = document.querySelector('.Resultconversion label');
  
    let isCelsiusToFahrenheit = true;
    const explanationBox = document.querySelector('.Explanation');
    const explanationText = document.querySelector('.Explanation p');
    const errorMessage = document.getElementById('error-message');
  
    // Event listener for the convert button
    convertButton.addEventListener('click', () => {
      const inputValue = parseFloat(inputField.value);
  
      // Validate the input temperature
      if (isNaN(inputValue)) {
        // Display an error message if the input is not a number
        showErrorMessage('Invalid temperature. Please enter a numeric value.');
      } else if (!isTemperatureInRange(inputValue)) {
        // Display an error message if the input is outside the valid range
        showErrorMessage('Temperature out of range. Please enter a valid temperature.');
      } else {
        // Perform the conversion
        if (isCelsiusToFahrenheit) {
          const fahrenheitValue = convertToCelsius(inputValue);
          fahrenheitInput.value = fahrenheitValue.toFixed(2);
          explanationText.textContent = `${inputValue} °C * (9/5) + 32 = ${fahrenheitValue.toFixed(2)} °F`;
        } else {
          const celsiusValue = convertToFahrenheit(inputValue);
          fahrenheitInput.value = celsiusValue.toFixed(2);
          explanationText.textContent = `${inputValue} °F - 32 * (5/9) = ${celsiusValue.toFixed(2)} °C`;
        }
        // Clear any error message
        clearErrorMessage();
        // Display the explanation box
        explanationBox.style.display = 'block';
      }
    });
  
    // Event listener for the reverse button
    reverseButton.addEventListener('click', () => {
      const temp = inputField.value;
      inputField.value = fahrenheitInput.value;
      fahrenheitInput.value = temp;
  
      // Toggle the conversion mode
      isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  
      // Update the labels based on the conversion mode
      if (isCelsiusToFahrenheit) {
        inputLabel.textContent = 'Celsius (°C)';
        resultLabel.textContent = 'Fahrenheit (°F)';
      } else {
        inputLabel.textContent = 'Fahrenheit (°F)';
        resultLabel.textContent = 'Celsius (°C)';
      }
    });
  
    // Event listener for the reset button
    resetButton.addEventListener('click', () => {
      // Reset the input fields
      inputField.value = '';
      fahrenheitInput.value = '';
      clearErrorMessage();
      explanationBox.style.display = 'none';
    });
  
    // Function to convert temperature from Celsius to Fahrenheit
    function convertToCelsius(celsius) {
      // Conversion formula from Celsius to Fahrenheit: F = (C * 9/5) + 32
      return (celsius * 9/5) + 32;
    }
  
    // Function to convert temperature from Fahrenheit to Celsius
    function convertToFahrenheit(fahrenheit) {
      // Conversion formula from Fahrenheit to Celsius: C = (F - 32) * 5/9
      return (fahrenheit - 32) * 5/9;
    }
  
    // Function to check if the input temperature is within the valid range
    function isTemperatureInRange(temperature) {
      // Valid temperature range is -273.15°C to 1000°C
      return temperature >= -273.15 && temperature <= 1000;
    }
  
    // Function to display an error message
    function showErrorMessage(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }
  
    // Function to clear the error message
    function clearErrorMessage() {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
    }
  });
  