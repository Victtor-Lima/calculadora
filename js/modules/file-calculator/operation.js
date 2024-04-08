const listKeys = [...document.querySelectorAll('.list-keys li')];
const operators = [...document.querySelectorAll('.operators')];
const panel = document.querySelector('.selected');
const result = document.querySelector('.result');

export default function initOperation() {
  let selected = panel.innerText;
  const active = 'active';

  const toCheck = (value) => {
    const listOperators = operators.map((item) => item.innerText);
    return listOperators.includes(value);
  };

  function restartWithResult(value) {
    selected = `${result.innerText}${value}`;
    result.innerText = '';
    panel.classList.add(active);
    result.classList.remove(active);
  }

  function handleClick({ target }) {
    const elText = target.innerText;

    if (target.classList.contains('numbers') && panel.classList.contains(active)) {
      selected += elText;
    }
    else if (target.classList.contains('operators') && !toCheck(selected.at(-1))) {
      result.innerText !== '' ? restartWithResult(elText) : (selected += `${elText}`);
    } 
    else if (target.classList.contains('operators') && elText !== selected.at(-1)) {
      selected = selected.slice(0, -1) + elText;
    }
    
    panel.innerText = selected.replace(/x/g, '*');
  }

  function operate() {
    panel.classList.remove(active);
    result.classList.add(active);
    result.innerText = eval(panel.innerText);
  }

  function clearAll() {
    selected = '';
    panel.innerText = '';
    result.innerText = '';
    panel.classList.add(active);
  }

  function deleteValue() {
    selected = selected.slice(0, -1);
    panel.innerText = selected;
  }

  listKeys.map((key) => key.addEventListener('click', handleClick));
  document.querySelector('.toExecute').addEventListener('click', operate);
  document.querySelector('.clear').addEventListener('click', clearAll);
  document.querySelector('.del').addEventListener('click', deleteValue);
}
