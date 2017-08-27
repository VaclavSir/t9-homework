const digitsToLetterGroupsMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const digitToLetterGroup = digit => digitsToLetterGroupsMap[digit] === undefined ? [] : digitsToLetterGroupsMap[digit];

/**
 * @param {Array<Array<string>>} letterGroups
 * @param {string} prefix
 * @returns {Array<string>}
 */
const combineLetterGroups = (letterGroups, prefix = '') => {
  const nonEmptyLetterGroups = letterGroups.filter(group => group.length > 0);
  if (nonEmptyLetterGroups.length === 0) {
    return [];
  }
  if (nonEmptyLetterGroups.length === 1) {
    return nonEmptyLetterGroups[0].map(letter => prefix + letter);
  }
  return nonEmptyLetterGroups[0]
    .map(letter => combineLetterGroups(nonEmptyLetterGroups.slice(1), prefix + letter))
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
};


/**
 * @param {string} digits
 * @returns {Array<string>}
 */
module.exports = digits => {
  const letterGroups = digits.split('').map(digit => digitToLetterGroup(digit))
  return combineLetterGroups(letterGroups);
}
