const listKeys = [...document.querySelectorAll('.list-keys li')];
const operators = [...document.querySelectorAll('.operators')];
const panel = document.querySelector('.selected');
const result = document.querySelector('.result');

export default function initOperation() {
  let selected = '';

  const toCheck = () => {
    const listOperators = operators.map((item) => item.innerText);
    return listOperators.includes(selected.at(-1));
  };

  function restartWithResult(value) {
    selected = `${result.innerText} ${value} `;
    result.innerText = ''
  }

  function handleClick({ target }) {
    if (target.classList.contains('numbers')) {
      selected += target.innerText;
    } else if (target.classList.contains('operators') && !toCheck()) {
      result.innerText !== ''
        ? restartWithResult(target.innerText)
        : (selected += `,${target.innerText},`);
    }
    panel.innerText = selected.replace(/x/g, '*').replace(/,/g, ' ');
  }

  function operate() {
    const problema = panel.innerText;
    const executar = eval(problema);
    result.innerText = executar;
    console.log(typeof result.innerText);
  }

  listKeys.map((key) => key.addEventListener('click', handleClick));
  document.querySelector('.toExecute').addEventListener('click', operate);
}
