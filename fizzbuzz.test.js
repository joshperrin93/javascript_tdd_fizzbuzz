const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns fizz when divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    })

    it('returns buzz when divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    })

    it('returns thenumber if not divisible by 3 or 5', () => {
        expect(fizzbuzz(8)).toBe(8);
    })

    it('returns fizzbuzz if divisible by both 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    })

    it('returns Fizz if number passed is 18', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    })

    it('returns Buzz if number passed is 20', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    })
})