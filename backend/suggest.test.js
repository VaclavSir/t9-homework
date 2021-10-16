const rewire = require("rewire")
const suggest = rewire("./suggest")
const digitToLetterGroup = suggest.__get__("digitToLetterGroup")
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

// @ponicode
describe("digitToLetterGroup", () => {
    test("0", () => {
        let callFunction = () => {
            digitToLetterGroup(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            digitToLetterGroup(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            digitToLetterGroup(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("suggest", () => {
    test("0", () => {
        let callFunction = () => {
            suggest(675966051848003956)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            suggest(6709431991929328)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            suggest("6767-0660-5154-5695-946")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            suggest("3432-903341-73690")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            suggest(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
