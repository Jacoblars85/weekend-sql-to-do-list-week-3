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
  .catch(error => {
    console.log('error getting todos', error);
    res.sendStatus(500);
  });
})

//post route


//put route


//delete route



module.exports = router;
