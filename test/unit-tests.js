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
    it('should return a value of 0 if the world is null', () => {
      const score = scoreWord(null)
      assert.equal(score, 0)
    })
  })

  context('multiplier', () => {
    it.skip('should turn all letters to uppercase', () => {

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
