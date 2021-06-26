// console.log('hello from js');
const myBtnEl = document.querySelector('#my-btn');
// console.log(myBtnEl);

function addButtonElement() {
  const btnEl = document.createElement('BUTTON');
  document.body.appendChild(btnEl);
}

myBtnEl.addEventListener('click', addButtonElement);

