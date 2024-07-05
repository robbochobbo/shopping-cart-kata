const cart_calculator = require('../cart_calculator')

describe('cart_calculator', () => {
    test('when passed an empty array, returns "cart empty!"', () => {
        expect(cart_calculator([])).toBe("cart empty!")
    })
})