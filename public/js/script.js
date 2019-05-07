let inputValue;

//This takes the numbers that the user inputs and converts them
//from a string into an array of numbers
function stringToArray(string) {
  let tempArray = Array.from(string);
  let array = [];
  let int;
  for(let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] !== ',' && tempArray[i] !== ' ') {
      int = parseInt(tempArray[i]);
      array.push(int);
    };
  };
  return array;
};

//The input is an array of numbers.  The output is the
//sum of those numbers.
function sum(arrayInput) {
  let array = stringToArray(arrayInput);
  return array.reduce((acc, cur) => {
    return acc + cur;
  });
};

//Handler function for the input box
function setInputValue(e) {
  inputValue = e.srcElement.value;
};

//Handler function for the submit button
function setReducedValue(e) {
  let reducedValue = sum(inputValue);
  let displayValue = `The sum of numbers is: <span style="color:red; font-weight:bold">${reducedValue}</span>`;
  document.getElementById("result").innerHTML = displayValue;
};

let input = document.getElementById('input');
let submit = document.getElementById('submit');

input.addEventListener('input', setInputValue);
submit.addEventListener('submit', setReducedValue);
