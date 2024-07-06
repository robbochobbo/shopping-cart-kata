const cart_calculator = require('../cart_calculator')
const cart = require('../data/mock_carts')

describe('cart_calculator', () => {
    test('when passed an empty array, returns "cart empty!"', () => {
        expect(cart_calculator([])).toBe("cart empty!")
    })
    test('when passed a valid cart, returns a number', () => {
        expect(typeof(cart_calculator(cart[0]))).toBe('number')
    })
    test('when passed a cart containing only 1 item, returns the correct sub-total', () => {
        expect(cart_calculator(cart[0])).toBe(50)
    })
    test('when passed a cart containing single different items, returns the correct sub-total', () => {
        expect(cart_calculator(cart[1])).toBe(122)
    })
    test('when passed a cart containing multiple of the same item, returns the correct sub-total', () => {
        expect(cart_calculator(cart[2])).toBe(100)
    })
    test('when passed a cart containing multiple of different items, returns the correct sub-total', () => {
        expect(cart_calculator(cart[3])).toBe(148)
    })

    test('when passed a cart of a single item type that qualfiies for a Special Price, returns the correct sub-total', () => {
        expect(cart_calculator(cart[4])).toBe(190)
        expect(cart_calculator(cart[5])).toBe(520)
    })

    test('when passed a cart of different items that qualify for a Special Price, returns the correct sub-total', () => {
        expect(cart_calculator(cart[6])).toBe(284)
        expect(cart_calculator(cart[7])).toBe(389)
        expect(cart_calculator(cart[8])).toBe(323)
    })
})