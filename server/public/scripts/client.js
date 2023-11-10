console.log('JS is sourced!');

getTodos()

//get route
function getTodos() {
    console.log('in get route');

    // axios call to server to get todos
  axios({
    url: '/todos',
    method: 'GET'
  }).then((response) => {
    renderTodos(response.data)
  })
}

//render route
function renderTodos(todos) {
  console.log('in render function');
  const toDoBody = document.getElementById('todoBody');
  toDoBody.innerHTML = '';

  for (let todo of todos) {
    toDoBody.innerHTML += `
    <li data-testid="toDoItem">${todo.text}</li>
    `
  }
}

//post route
function postTodos(event) {
  console.log('clicking add');

  let todoInput = document.getElementById('toDoTextInput').value;

let newTodo = {
  text: todoInput
};

document.getElementById('toDoTextInput').value = '';

  axios({
    url: '/todos',
    method: 'POST',
    data: newTodo
  }).then((response) => {
    getTodos()
  }).catch((error) =>{
    console.log(error, 'Error in posting todos');
    alert('ERROR in post rooute');
  })
}

//put route


//delete route