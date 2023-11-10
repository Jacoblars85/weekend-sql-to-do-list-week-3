console.log('JS is sourced!');

getTodos()

//get route
function getTodos() {
    console.log('in get route client side');

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
  let toDoBody = document.getElementById('');
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