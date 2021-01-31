const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

// 1. complete the index.js file *
// 2. create the api and data directories
// 3. in the package.json file, add express, nodemon, helmet, knex, sqlite3
// 4. in the package add the scripts so the project can be bootted up
// 5. in api, create a cars directory
// 6. in the cars directory, create a cars-router.js file
// 7. in api, create a server.js file
// 8. in data file, create a db-config.js file 
// 9. in db-config.js file, connect knex, knexfile.js, add the configuredKnex variable and export the file
//10. in cars-router.js file, connect db-config.js file, create Router variable and build out the get, post, put and delete methods
//11. connect cars-router.js file to server.js 
//12. connect server.js file to index.js file 
//13. create database schema with your sqlite editor
//14. from your sqlite editor, connect and create your database to your data directory in your project
//15. execute 'knex init' from your terminal to create the knexfile.js file in your root directory 
//16. in your knexfile.js file, buid out your development object 
//17. from your terminal, start your migration process by executing 'npx knex migrate:make cars-schema' 
//17a. populate your knexfile.js file with the migration part of of the object
//18. build out your up and down stubs 
//19. next, run 'npx knex migrate:latest' 
//20. next run 'npx knex cars-schema' 
//21. next, to start the seed directory and 
//22. next, populate your knexfile.js file with the seeds part of of the object
//23. in your terminal run 'npx knex seed:make 01-cars' 
//24. in your terminal, run 'npx knex seed:run' 
// if you want to add additional tables, you can do so with an additional migration but do this before seeding.