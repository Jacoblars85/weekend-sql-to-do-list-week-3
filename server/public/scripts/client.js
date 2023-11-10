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
    let isComplete = todo.isComplete

    if (isComplete === true) {
      toDoBody.innerHTML += `
    <ul data-testid="toDoItem" class="completed" data-todoId="${todo.id}" >${todo.text} 
    <button data-testid="deleteButton" class="delete" onclick="deleteButton(event)" >Delete</button>
    </ul>
    `
    } else if (isComplete === false) {
      toDoBody.innerHTML += `
      <ul data-testid="toDoItem" data-todoId="${todo.id}" >${todo.text} 
      <button data-testid="completeButton" class="complete" onclick="makeComplete(event)" >Complete</button>
      <button data-testid="deleteButton" class="delete" onclick="deleteButton(event)" >Delete</button>
      </ul>
      `
    }



   
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
  })
}

//put route
function makeComplete(event) {
  console.log('finishing that task');
  let todoId = event.target.closest('ul').getAttribute('data-todoId');

  axios({
    url: `/todos/${todoId}`,
    method: 'PUT'
  }).then((response) => {
    getTodos()
  }).catch((error) =>{
    console.log(error, 'Error in completing todo');
  })
 
}

//delete route
function deleteButton(event) {
  console.log('trying to delete');

  let todoId = event.target.closest('ul').getAttribute('data-todoId');

  axios({
    method: 'DELETE',
    url: `/todos/${todoId}`
  }).then((response) => {
    getTodos();
  }).catch((error) => {
    console.log('delete /todos/:id fail', error);
  })
}