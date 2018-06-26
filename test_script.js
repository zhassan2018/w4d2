const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});



const runQuery = (queryStatement, cb) =>{
   client.connect((err) => {

    if (err){
      console.error(err)
      return cb(err, null)
    }

  client.query(queryStatement, (err, results) =>{
    if (err) {
      console.error(err)
      return cb(err, null)
    }
      
    cb(null, results)
    client.end()
  })
  })

}

module.exports={
  runQuery, client
}

/*const userInput = process.argv[2];


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name = '${userInput}' OR last_name = '${userInput}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    for (var i = 0; i < result.rowCount; i++ ){
      var x = result.rows[i];
    console.log(x["first_name"], x["last_name"] );
    
}



   
    client.end();
  });
});
*/


