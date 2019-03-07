const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
	test('should set testing enviornment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('GET /', () => {
		// Promises
		test('should return status 200', () => {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.status).toBe(200);
				})
				.catch();
		});

		// ASYNC
		test('should return status 200', async () => {
			const res = await request(server).get('/');
			expect(res.status).toBe(200);
		});

		test('should return JSON', async () => {
			const res = await request(server).get('/');
			expect(res.type).toBe('application/json');
		});
		test('should return body', async () => {
			const res = await request(server).get('/');
			expect(res.type).toBe('application/json');
		});
	});
});

//http status code
//format of the data
//shape of the response
