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

function sum(arrayInput) {
  let array = stringToArray(arrayInput);
  return array.reduce((acc, cur) => {
    return acc + cur;
  });
};

function returnSum(array) {
  let sumValue = sum(array);
  return sumValue;
};

function setInputValue(e) {
  inputValue = e.srcElement.value;
  reducedValue = returnSum(inputValue);
};

function setReducedValue(e) {
  document.getElementById("result").innerHTML = returnSum(inputValue);
};

let input = document.getElementById('input');
let inputValue;
let reducedValue;

input.addEventListener('input', setInputValue);
console.log(inputValue)

let submit = document.getElementById('submit');
submit.addEventListener('submit', setReducedValue);
