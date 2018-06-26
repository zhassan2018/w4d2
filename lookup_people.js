var userInput = process.argv.slice(2);
const qfunction = require("./withKnex");


qfunction.runQuery(`SELECT * FROM famous_people WHERE first_name = '${userInput}' OR last_name = '${userInput}'`,

	(err, result) => {
	    if (err) {
	      return console.error("error running query", err);
	    }

	    console.log("Found", result.rowCount, `by the name '${userInput}':`)


	    for (var i = 0; i < result.rowCount; i++ ){
	      var x = result.rows[i];
	      //Implement function to convert date into numbers
	    console.log(`-${i+1}:`,x["first_name"], x["last_name"], `born ${x['birthdate']} `)
	    
	}
	   
	
})