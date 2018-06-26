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

var Fname = process.argv[2];
var Lname = process.argv[3];
var Bday = process.argv[4];


knex('famous_people').insert({first_name: Fname, last_name: Lname, birthdate: Bday}).then(function(results){
  knex.destroy();
})