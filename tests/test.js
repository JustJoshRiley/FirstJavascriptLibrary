const funct = require('../index');

test('capitalizeFirstLetter', () => {
  expect(funct.capitalizeFirstLetter('foo bar')).toBe('Foo bar');
});

test('callCaps', () => {
  expect(funct.allCaps('foo bar')).toBe('FOO BAR');
});

test('capWords', () => {
  expect(funct.capWords('foo bar')).toBe('Foo Bar');
});

test('removeXSPaces', () => {
  expect(funct.removeXSpaces('  foo   bar ')).toBe('foo bar');
});

test('kebobCase', () => {
  expect(funct.kebobCase('fofo bar bAr-e')).toBe('fofo-bar-bar-e');
});

test('snakeCase', () => {
  expect(funct.snakeCase('fofo bar bAr-e')).toBe('fofo_bar_bare');
});

test('camelCase', () => {
  expect(funct.camelCase('fofo bar bAr-e')).toBe('fofoBarBAr-e');
});

test('shift', () => {
  expect(funct.shift('foo bare', 3)).toBe(' barefoo');
});

test('makeHashtag', () => {
  expect(funct.makeHashTag('lol hehehehe evan joshy foo')).toEqual(['#Hehehehe', '#Evan', '#Joshy']);
});

test('isEmpty', () => {
  expect(funct.isEmpty('lol hehehehe evan joshy foo')).toBe(false);
  expect(funct.isEmpty(' ')).toBe(true);
});
