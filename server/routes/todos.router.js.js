const router = require('express').Router();
const pool = require('../modules/pool');


//get route
router.get('/', (req, res) => {
    console.log('in get route');

    let queryText = `
    SELECT * FROM "todos" 
    ORDER BY "id";
    `
  pool.query(queryText)
    .then(dbResult => {
        console.log('dbResult', dbResult.rows);
        // Sends back the results in an object
        res.send(dbResult.rows);
  })
  .catch(dbError => {
    console.log('error getting todos', dbError);
    res.sendStatus(500);
  });
})

//post route
router.post('/', (req, res) => {
  console.log(req.body);

  let todoInput = req.body
 
  const sqlQueryText = `
      INSERT INTO "todos"
          ("text")
          VALUES
          ($1);
  `
  const sqlValues = [todoInput.text];
  console.log(sqlValues, "are the values");
  pool.query(sqlQueryText, sqlValues)
      .then((dbResult) => {
          res.sendStatus(201);
          console.log('POST successful');
      }).catch((dbError) => {
        console.log('error posting todos', dbError);
          res.sendStatus(500);
      })
})

//put route
router.put('/:id', (req, res) => {
  console.log('hopefully this works');
  const idofTodos = req.params.id;

  console.log(idofTodos);

  const sqlQueryText = `
  UPDATE "todos"
  SET "isComplete" = true
  WHERE "id" = $1
  `

  const sqlValues = [idofTodos]

  pool.query(sqlQueryText, sqlValues)
  .then((dbResult) => {
      res.sendStatus(201);
      console.log('PUT successful');
  }).catch((dbError) => {
      res.sendStatus(500);
      console.log('got an error in put route', dbError);
  })

})

//delete route



module.exports = router;
