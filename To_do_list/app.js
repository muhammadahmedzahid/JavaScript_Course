const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo => {

  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
`;

list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

  e.preventDefault();
  // trim() removes the early and after white spaces from the world.
  const todo = addForm.add.value.trim();
  console.log('todo output: ',todo);
  // if statment runs if no is positive.
  // if 0 it is falsy so it cannot run the if statement.
  if(todo.length){
  generateTemplate(todo);
  // In order to null the text field
  addForm.reset();
  }
});

// delete todos

list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

const filterTodos = (term) => {

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));


};

// keyup event

search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

