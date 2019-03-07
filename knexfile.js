// Update with your config settings.
const localPgConnection = {
	host: 'localhost',
	database: 'hobbits',
	user: 'student',
	password: 'pass',
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/hobbits.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
	production: {
		client: 'pg',
		connection: prodDbConnection, // could be an object or string
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
