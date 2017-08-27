const suggest = require('./suggest');

test('Suggest letters for a digit', () => {
  expect(suggest('2')).toEqual(['a', 'b', 'c']);
  expect(suggest('3')).toEqual(['d', 'e', 'f']);
  expect(suggest('4')).toEqual(['g', 'h', 'i']);
  expect(suggest('5')).toEqual(['j', 'k', 'l']);
  expect(suggest('6')).toEqual(['m', 'n', 'o']);
  expect(suggest('7')).toEqual(['p', 'q', 'r', 's']);
  expect(suggest('8')).toEqual(['t', 'u', 'v']);
  expect(suggest('9')).toEqual(['w', 'x', 'y', 'z']);
});

test('Suggest nothing for an unknown digit', () => {
  expect(suggest('0')).toEqual([]);
  expect(suggest('02')).toEqual(['a', 'b', 'c']);
});

test('Suggests all combinations of characters on multiple digits', () => {
  expect(suggest('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  expect(suggest('55')).toEqual(['jj', 'jk', 'jl', 'kj', 'kk', 'kl', 'lj', 'lk', 'll']);
  expect(suggest('234')).toEqual([
    'adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi',
  ]);
  expect(suggest('67')).toEqual(['mp', 'mq', 'mr', 'ms', 'np', 'nq', 'nr', 'ns', 'op', 'oq', 'or', 'os']);
});
