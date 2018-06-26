const settings = require("./settings"); // settings.json
const pg = require('pg')
var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  
  },
  searchPath: ['knex', 'public'],
});

var userInput = process.argv[2];

knex('famous_people').select('*').where("first_name", userInput).then(function(int){
  console.log(int)
  for (var i = 0; i < int.length; i++ ){

        var x = int[i];
        //Implement function to convert date into numbers
      console.log(`-${i+1}:`,x["first_name"], x["last_name"], `born ${x['birthdate']} `)
      knex.destroy();
  }
  
})




/*for (var i = 0; i < int.rowCount; i++ ){

      var x = int.rows[i];
      //Implement function to convert date into numbers
    console.log(`-${i+1}:`,x["first_name"], x["last_name"], `born ${x['birthdate']} `)
    
}*/

