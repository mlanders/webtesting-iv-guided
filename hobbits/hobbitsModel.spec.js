const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
	describe('instert()', () => {
		afterEach(async () => {
			await db('hobbits').truncate();
		});
		test('should instert the provided hobbit', async () => {
			let hobbit = await Hobbits.insert({ name: 'sam' });
			expect(hobbit.name).toBe('sam');

			hobbit = await Hobbits.insert({ name: 'gaffer' });
			expect(hobbit.name).toBe('gaffer');
		});
		test('should instert the provided hobbits', async () => {
			await Hobbits.insert({ name: 'sam' });
			await Hobbits.insert({ name: 'gaffer' });
			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(2);
		});
	});
});
