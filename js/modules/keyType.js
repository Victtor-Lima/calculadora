export let operatorType;
export let numberType;

export default function KeyType(value) {
  const operators = [...document.querySelectorAll('.operators')].map((operator) => operator.innerText);
  const numbers = [...document.querySelectorAll('.numbers')].map((number) => number.innerText);

  if (operators.includes(value)) {
    operatorType = value;
  } else if (numbers.includes(value)) {
    numberType = Number(value);
  }
}