import { describe, expect, it } from '@jest/globals'
import { myAsyncName, myName } from '../src'

/**
 * Sync
 */
describe('sync tests', function () {
  it('returns valid name (sync)', () => {
    expect.assertions(1)
    expect(myName('John')).toMatch('John, your name is valid!')
  })

  it('throws invalid name (sync)', () => {
    expect.assertions(1)
    expect(() => myName('John!')).toThrow('Your name is invalid')
  })
})

/**
 * Async
 */
describe('async tests', function () {
  it('returns valid name (async)', async () => {
    expect.assertions(1)
    expect(await myAsyncName('John')).toMatch('John, your name is valid!')
  })

  it('throws invalid name (async)', async () => {
    expect.assertions(1)
    await expect(myAsyncName('John!')).rejects.toThrow('Your name is invalid')
  })
})
