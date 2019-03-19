import { CsvPipe } from './csv.pipe';

describe('CsvPipe', () => {
	it('create an instance', () => {
		const pipe = new CsvPipe();
		expect(pipe).toBeTruthy();
	});
});
