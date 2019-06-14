const firstRecurringCharacter = require('./google-interview-first-recurring-char')

/* global test expect describe */

describe('isBalanced()', () => {
  test('should return 9', () => {
    var input = [2, 5, 1, 2, 3, 5, 1, 2, 4]
    var solution = 2

    expect(firstRecurringCharacter.firstRecurringCharacter(input)).toEqual(solution)
  })
})
