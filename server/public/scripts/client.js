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


//put route


//delete route