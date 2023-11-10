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
    <li data-testid="toDoItem" data-todoId="${todo.id} class="completed" >${todo.text} 
    <button data-testid="deleteButton" onclick="" >Delete</button>
    </li>
    `
    } else if (isComplete === false) {
      toDoBody.innerHTML += `
      <li data-testid="toDoItem" data-todoId="${todo.id}">${todo.text} 
      <button data-testid="completeButton" onclick="makeComplete(event)" >Complete</button>
      <button data-testid="deleteButton" onclick="" >Delete</button>
      </li>
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
  let todoId = event.target.closest('li').getAttribute('data-todoId');

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