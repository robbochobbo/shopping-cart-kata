const calculateCart = require('../calculateCart')
const mockCarts = require('../data/mockCarts')

describe('calculateCart', () => {
    test('throws an error if passed an empty array', () => {
        expect(() => {
            calculateCart([]);
          }).toThrow(new Error('Cart is empty'))
    })
    test('when passed a valid cart, returns a number', () => {
        expect(typeof(calculateCart(mockCarts.oneItem1))).toBe('number')
        expect(typeof(calculateCart(mockCarts.oneItem2))).toBe('number')
    })
    test('when passed a cart containing only 1 item, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.oneItem1)).toBe(50)
        expect(calculateCart(mockCarts.oneItem2)).toBe(35)
    })
    test('when passed a cart containing single different items, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.singleDifferentItems1)).toBe(122)
        expect(calculateCart(mockCarts.singleDifferentItems2)).toBe(110)
    })
    test('when passed a cart containing multiple of the same item, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.multipleSameItem1)).toBe(100)
        expect(calculateCart(mockCarts.multipleSameItem2)).toBe(96)
    })
    test('when passed a cart containing multiple of different items, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.multipleDifferentItems1)).toBe(148)
        expect(calculateCart(mockCarts.multipleDifferentItems2)).toBe(198)
    })
    test('when passed a cart of a single item type that qualfiies for a Special Price, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.multipleSameItemQualifiyingForSpecial1)).toBe(190)
        expect(calculateCart(mockCarts.multipleSameItemQualifiyingForSpecial2)).toBe(520)
    })
    test('when passed a cart of different items that qualify for a Special Price, returns the correct sub-total', () => {
        expect(calculateCart(mockCarts.multipleDifferentItemQualifiyingForSpecial1)).toBe(284)
        expect(calculateCart(mockCarts.multipleDifferentItemQualifiyingForSpecial2)).toBe(389)
        expect(calculateCart(mockCarts.multipleDifferentItemQualifiyingForSpecial3)).toBe(323)
    })
    test('when passed a cart containing items that do not exist in Pricing Dataset, responds with error message', () => {
        expect(() => {
            calculateCart(mockCarts.itemCodesNotInDataset1);
          }).toThrow(new Error('Item(s) "E"  do not exist in Pricing Dataset.'))
          expect(() => {
            calculateCart(mockCarts.itemCodesNotInDataset2);
          }).toThrow(new Error('Item(s) "E" "F" "G"  do not exist in Pricing Dataset.'))
    })
})