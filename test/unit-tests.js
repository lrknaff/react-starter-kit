import { assert } from 'chai'
import scoreWord from '../lib/scoreWord.js'

describe('scoreWord', () => {
  it('should be a function', () => {
    assert.isFunction(scoreWord)
  })

  context('word score', () => {
    it('should return a value of 8 if the word is hello', () => {
      const score = scoreWord('hello')
      assert.equal(score, 8)
    })
    it('should return a value of 9 if the word is world', () => {
      const score = scoreWord('world')
      assert.equal(score, 9)
    })
    it('should return a value of 0 if the word is null', () => {
      const score = scoreWord(null)
      assert.equal(score, 0)
    })
    it('should return a value of 0 if the word is an empty string', () => {
      const score = scoreWord('')
      assert.equal(score, 0)
    })
  })

  context('multiplier', () => {
    it('it should multiply the word score', () => {
      const score = scoreWord('hello', 2)
      assert.equal(score, 16)
    })
    it('it should multiply the word score', () => {
      const score = scoreWord('world', 3)
      assert.equal(score, 27)
    })
  })

  context('more functionality', () => {
    it('should not be case sensitive', () => {
      const score = scoreWord('HELLO')
      assert.equal(score, 8)
    })
    it('should not be case sensitive', () => {
      const score = scoreWord('wOrLd')
      assert.equal(score, 9)
    })
    it('should not count white space', () => {
      const score = scoreWord('   hello')
      assert.equal(score, 8)
    })
  })
})
