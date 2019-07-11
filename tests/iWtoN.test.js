const iWtoN = require('../src/index');

describe('Tokenizing strings', () => {
	it('can make an array of words', () => {
		expect(iWtoN.tokenize('un milione')).toEqual(['un', 'milione']);
	});

	it('can convert string numbers to numbers', () => {
		expect(iWtoN.tokenize('5 milioni 3453')).toEqual([5, 'milioni', 3453]);
	});

	it('can remove the delimiter word from the array', () => {
		expect(iWtoN.tokenize('6 milioni e 52')).toEqual([6, 'milioni', 52]);
	});
});

describe('Computing numbers from tokenized array', () => {
	it('computes sei milioni', () => {
		expect(iWtoN.compute(['sei', 'milioni'])).toEqual(6000000);
	});

	it('computes sei milioni e 30', () => {
		expect(iWtoN.compute(['sei', 'milioni', 30])).toEqual(6000030);
	});

	it('computes cento milioni e sei', () => {
		expect(iWtoN.compute(['cento', 'milioni', 'sei'])).toEqual(100000006);
	});

	it('computes cinquemila 56', () => {
		expect(iWtoN.compute(['cinquemila', 56])).toEqual(5056);
	});

	it('computes un milione duecentomila cinquecento cinquantadue', () => {
		expect(iWtoN.compute(['un', 'milione', 'duecentomila', 'cinquecento', 'cinquantadue'])).toEqual(1200552);
	});
});

describe('Getting millions', () => {
	it('multiplies initial sum for one million and empties string (singular word)', () => {
		expect(iWtoN.getMillion('milione', 6)).toEqual({ str: '', sum: 6000000 });
	});

	it('multiplies initial sum for one million and empties string (plural word)', () => {
		expect(iWtoN.getMillion('milioni', 25)).toEqual({ str: '', sum: 25000000 });
	});
});

describe('Getting thousands', () => {
	it('sums to initial sum a thousand and empties string (singular word, sum = 0)', () => {
		expect(iWtoN.getMillion('mille', 0)).toEqual({ str: '', sum: 1000 });
	});

	it('sums to initial sum a thousand and empties string (singular word, sum > 0)', () => {
		expect(iWtoN.getMillion('mille', 1000000)).toEqual({ str: '', sum: 1001000 });
	});

	it('sums to initial sum given thousands and empties string (plural word, sum = 0)', () => {
		expect(iWtoN.getMillion('settemila', 0)).toEqual({ str: '', sum: 7000 });
	});

	it('sums to initial sum given thousands and empties string (plural word, sum > 0)', () => {
		expect(iWtoN.getMillion('novantamila', 2000000)).toEqual({ str: '', sum: 2090000 });
	});
});

describe('Getting hundreds', () => {
	it('sums to initial sum a hundred and empties string (singular word)', () => {
		expect(iWtoN.getMillion('cento', 0)).toEqual({ str: '', sum: 100 });
	});

	it('sums to initial sum given thousands and empties string (plural word, sum = 0)', () => {
		expect(iWtoN.getMillion('duecento', 0)).toEqual({ str: '', sum: 200 });
	});

	it('sums to initial sum given thousands and empties string (plural word, sum > 0)', () => {
		expect(iWtoN.getMillion('trecento', 70000)).toEqual({ str: '', sum: 70300 });
	});
});

describe('Getting tens', () => {
	it('sums to initial sum given ten word and empties string (sum = 0)', () => {
		expect(iWtoN.getMillion('quaranta', 0)).toEqual({ str: '', sum: 40 });
	});

	it('sums to initial sum given ten word and empties string (sum > 0)', () => {
		expect(iWtoN.getMillion('ventitré', 2000)).toEqual({ str: '', sum: 2023 });
	});
});

describe('Getting units', () => {
	it('sums to initial sum given unit and empties string (sum = 0)', () => {
		expect(iWtoN.getMillion('tre', 0)).toEqual({ str: '', sum: 3 });
	});

	it('sums to initial sum given unit and empties string (sum > 0)', () => {
		expect(iWtoN.getMillion('sette', 700)).toEqual({ str: '', sum: 707 });
	});
});

describe('Converting words to numbers', () => {
	it('converts milleduecentosettantaquattro', () => {
		expect(iWtoN.convert('milleduecentosettantaquattro')).toEqual(1274);
	});

	it('converts quarantotto', () => {
		expect(iWtoN.convert('quarantotto')).toEqual(48);
	});

	it('converts trentatré', () => {
		expect(iWtoN.convert('trentatré')).toEqual(33);
	});

	it('converts duemilaottocentosei', () => {
		expect(iWtoN.convert('duemilaottocentosei')).toEqual(2806);
	});

	it('converts sessantamiladiciassette', () => {
		expect(iWtoN.convert('sessantamiladiciassette')).toEqual(60017);
	});

	it('converts novecentonovantanovemilanovecentonovantanove', () => {
		expect(iWtoN.convert('novecentonovantanovemilanovecentonovantanove')).toEqual(999999);
	});

	it('converts seicento', () => {
		expect(iWtoN.convert('seicento')).toEqual(600);
	});

	it('converts seicentosessantasei', () => {
		expect(iWtoN.convert('seicentosessantasei')).toEqual(666);
	});

	it('converts milleduecento', () => {
		expect(iWtoN.convert('milleduecento')).toEqual(1200);
	});

	it('converts centodiciotto', () => {
		expect(iWtoN.convert('centodiciotto')).toEqual(118);
	});

	it('converts due', () => {
		expect(iWtoN.convert('due')).toEqual(2);
	});

	it('converts centomila', () => {
		expect(iWtoN.convert('centomila')).toEqual(100000);
	});

	it('converts un milione', () => {
		expect(iWtoN.convert('un milione')).toEqual(1000000);
	});

	it('converts due milioni e due', () => {
		expect(iWtoN.convert('due milioni e due')).toEqual(2000002);
	});

	it('converts tre milioni novecentotré', () => {
		expect(iWtoN.convert('tre milioni novecentotré')).toEqual(3000903);
	});

	it('converts un milione e millesei', () => {
		expect(iWtoN.convert('un milione e millesei')).toEqual(1001006);
	});

	it('converts novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', () => {
		expect(iWtoN.convert('novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove')).toEqual(999999999);
	});

	it('converts meno quattordici', () => {
		expect(iWtoN.convert('meno quattordici')).toEqual(-14);
	});

	it('converts meno due milioni e sette', () => {
		expect(iWtoN.convert('meno due milioni e sette')).toEqual(-2000007);
	});
});

describe('Error cases', () => {
	it('throws error if initial string in empty', () => {
		expect(() => iWtoN.convert('')).toThrowError(Error);
	});

	it('throws error if initial string in undefined', () => {
		expect(() => iWtoN.convert(undefined)).toThrowError(Error);
	});

	it('throws error if the string passed is not a number', () => {
		expect(() => iWtoN.convert('gattini')).toThrowError(Error);
	});

	it('throws error if the string cannot be completely translated', () => {
		expect(() => iWtoN.convert('sette gattini')).toThrowError(Error);
	});
});