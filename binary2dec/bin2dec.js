let binaryDigits = ''
const input = document.querySelector('.input-class')
input.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    if(inputValue !== '' && (inputValue[inputValue.length-1] === '1' || inputValue[inputValue.length-1] === '0')) {
        binaryDigits = inputValue
    } else {
        if(inputValue.length > 1) {
        input.value = inputValue.slice(0, -1);
        } else {
        input.value = ''
        }
    }
    calculateDecimalValue()
  });

  function calculateDecimalValue(){
    let value = 0
    binaryDigits.split('').forEach(element => {
        value = (value * 2) + parseInt(element)
    });
    document.getElementById('result').innerHTML = value
  }
