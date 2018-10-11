# userpost1

#Node Job

project description: This was a test for a job using GraphQL and Apollo Server

#Project Setup

clone or download the repository

install required dependencies by running: npm install

launch MySQL server and create your database ( note: tables will be created automatically by sequelize )

Override project configuration inside config/server.config.js:

development: {
	database: {
		host:  'localhost',
		name:  'node-job',
		username:  'root',
		password:  '',
	}
},

production: {
	database: {
		host:  env.DATABASE_HOST,
		name:  env.DATABASE_NAME,
		username:  env.DATABASE_USER,
		password:  env.DATABASE_PASSWORD,
	}
}
Launch the development server by running npm start 

navigate to localhost:4000 in your browser to use the GraphQL interface


