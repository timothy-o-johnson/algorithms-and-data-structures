const firstRecurringCharacter = require('./google-interview-first-recurring-char')

/* global test expect describe */

describe('firstRecurringCharacter()', () => {
  test('should return first repeated number', () => {
    var input = [2, 5, 1, 2, 3, 5, 1, 2, 4]
    var solution = 2

    expect(firstRecurringCharacter.firstRecurringCharacter(input)).toEqual(solution)
  })

  test('should return first repeated number', () => {
    var input = [2, 1, 1, 2, 3, 5, 1, 2, 4]
    var solution = 1

    expect(firstRecurringCharacter.firstRecurringCharacter(input)).toEqual(solution)
  })

  test('should return undefined', () => {
    var input = [2, 3, 4, 5]
    var solution

    expect(firstRecurringCharacter.firstRecurringCharacter(input)).toEqual(solution)
  })

  test('bonus: should return first repeated number', () => {
    var input = [2, 5, 5, 2, 3, 5, 1, 2, 4]
    var solution = 5

    expect(firstRecurringCharacter.firstRecurringCharacter(input)).toEqual(solution)
  })
})

describe('firstRecurringCharacter2()', () => {
  test('should return first repeated number', () => {
    var input = [2, 5, 1, 2, 3, 5, 1, 2, 4]
    var solution = 2

    expect(firstRecurringCharacter.firstRecurringCharacter2(input)).toEqual(solution)
  })

  test('should return first repeated number', () => {
    var input = [2, 1, 1, 2, 3, 5, 1, 2, 4]
    var solution = 1

    expect(firstRecurringCharacter.firstRecurringCharacter2(input)).toEqual(solution)
  })

  test('should return undefined', () => {
    var input = [2, 3, 4, 5]
    var solution

    expect(firstRecurringCharacter.firstRecurringCharacter2(input)).toEqual(solution)
  })

  test('bonus: should return first repeated number', () => {
    var input = [2, 5, 5, 2, 3, 5, 1, 2, 4]
    var solution = 5

    expect(firstRecurringCharacter.firstRecurringCharacter2(input)).toEqual(solution)
  })
})