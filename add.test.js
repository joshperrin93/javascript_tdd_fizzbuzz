const add = require('./add');

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    })

    it('adds -1 and 6', () => {
        expect(add(-1, 6)).toBe(5);
    })
});