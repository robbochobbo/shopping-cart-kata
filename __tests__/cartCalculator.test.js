const cartCalculator = require('../cartCalculator')
const cart = require('../data/mock_carts')

describe('cartCalculator', () => {
    test('when passed an empty array, returns "cart empty!"', () => {
        expect(cartCalculator([])).toBe("cart empty!")
    })
    test('when passed a valid cart, returns a number', () => {
        expect(typeof(cartCalculator(cart[0]))).toBe('number')
    })
    test('when passed a cart containing only 1 item, returns the correct sub-total', () => {
        expect(cartCalculator(cart[0])).toBe(50)
    })
    test('when passed a cart containing single different items, returns the correct sub-total', () => {
        expect(cartCalculator(cart[1])).toBe(122)
    })
    test('when passed a cart containing multiple of the same item, returns the correct sub-total', () => {
        expect(cartCalculator(cart[2])).toBe(100)
    })
    test('when passed a cart containing multiple of different items, returns the correct sub-total', () => {
        expect(cartCalculator(cart[3])).toBe(148)
    })

    test('when passed a cart of a single item type that qualfiies for a Special Price, returns the correct sub-total', () => {
        expect(cartCalculator(cart[4])).toBe(190)
        expect(cartCalculator(cart[5])).toBe(520)
    })

    test('when passed a cart of different items that qualify for a Special Price, returns the correct sub-total', () => {
        expect(cartCalculator(cart[6])).toBe(284)
        expect(cartCalculator(cart[7])).toBe(389)
        expect(cartCalculator(cart[8])).toBe(323)
    })

    test('when passed a cart containing items that do not exist in Pricing Dataset, responds with error message', () => {
        expect(cartCalculator(cart[9])).toBe('Item(s) "E"  do not exist in Pricing Dataset.')
        expect(cartCalculator(cart[10])).toBe('Item(s) "E" "F" "G"  do not exist in Pricing Dataset.')
    })
})