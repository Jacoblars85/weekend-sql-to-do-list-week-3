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
    //will put render function here
  })
}

//render route
function renderTodos() {
    
}

//post route


//put route


//delete route