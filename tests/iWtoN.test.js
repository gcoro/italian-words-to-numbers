const iWtoN = require('../src/index');

describe('Tokenizing strings', function() {
  it('can make an array of words', function() {
    var actual = iWtoN.tokenize('un milione');
    expect(actual).toEqual(['un', 'milione']);
  });

  it ('can convert string numbers to numbers', function () {
    var actual = iWtoN.tokenize('5 milioni 3453');
    expect(actual).toEqual([5, 'milioni', 3453]);
  });

  it ('can remove the delimiter word from the array', function () {
    var actual = iWtoN.tokenize('6 milioni e 52');
    expect(actual).toEqual([6, 'milioni', 52]);
  });
});

describe('Converting words to numbers', function () {
  it('converts milleduecentosettantaquattro', function () {
    var actual = iWtoN.convert('milleduecentosettantaquattro');
    expect(actual).toEqual(1274);
  });

  it('converts quarantotto', function () {
    var actual = iWtoN.convert('quarantotto');
    expect(actual).toEqual(48);
  });

  it('converts trentatré', function () {
    var actual = iWtoN.convert('trentatré');
    expect(actual).toEqual(33);
  });

  it('converts duemilaottocentosei', function () {
    var actual = iWtoN.convert('duemilaottocentosei');
    expect(actual).toEqual(2806);
  });

  it('converts sessantamiladiciassette', function () {
    var actual = iWtoN.convert('sessantamiladiciassette');
    expect(actual).toEqual(60017);
  });

  it('converts novecentonovantanovemilanovecentonovantanove', function () {
    var actual = iWtoN.convert('novecentonovantanovemilanovecentonovantanove');
    expect(actual).toEqual(999999);
  });

  it('converts seicento', function () {
    var actual = iWtoN.convert('seicento');
    expect(actual).toEqual(600);
  });

  it('converts seicentosessantasei', function () {
    var actual = iWtoN.convert('seicentosessantasei');
    expect(actual).toEqual(666);
  });

  it('converts milleduecento', function () {
    var actual = iWtoN.convert('milleduecento');
    expect(actual).toEqual(1200);
  });

  it('converts centodiciotto', function () {
    var actual = iWtoN.convert('centodiciotto');
    expect(actual).toEqual(118);
  });

  it('converts due', function () {
    var actual = iWtoN.convert('due');
    expect(actual).toEqual(2);
  });

  it('converts un milione', function () {
    var actual = iWtoN.convert('un milione');
    expect(actual).toEqual(1000000);
  });

  it('converts due milioni e due', function () {
    var actual = iWtoN.convert('due milioni e due');
    expect(actual).toEqual(2000002);
  });

  it('converts tre milioni novecentotré', function () {
    var actual = iWtoN.convert('tre milioni novecentotré');
    expect(actual).toEqual(3000903);
  });

  it('converts un milione e millesei', function () {
    var actual = iWtoN.convert('un milione e millesei');
    expect(actual).toEqual(1001006);
  });

  it('converts novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', function () {
    var actual = iWtoN.convert('novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove');
    expect(actual).toEqual(999999999);
  });
});

// TODO implement test for methods compute, getUnit, getTens, getHundred, getThousands