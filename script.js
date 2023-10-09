const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');

btn.addEventListener('click', () =>{
    let response = input.value;
    input.value = '';
    input.focus();

  const perItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  perItem.appendChild(span);
  perItem.appendChild(deleteBtn);

  span.textContent = response
  deleteBtn.textContent = 'Delete';

  ul.appendChild(perItem);

  deleteBtn.addEventListener('click', () => {
    ul.removeChild(perItem);



});

});