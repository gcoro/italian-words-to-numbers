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

describe('Computing Numbers from tokenized array', () => {
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
});

// TODO implement test for methods getUnit, getTens, getHundred, getThousands, getMillion