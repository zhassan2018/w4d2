
exports.up = function(knex, Promise) {
	return Promise.all([
	    knex.schema.createTable('milestones2', function(table){
	      table.increments();
	      table.string('description');
	      table.date('date_achieved');
	      table.integer('famous_people_id');
	      table.foreign('famous_people_id').references('id').inTable('famous_people')
	     
	    })
	  ])
  
};

exports.down = function(knex, Promise) {
	return Promise.all([
	   knex.schema.dropTable('milestones2')
	 ]) 
};
