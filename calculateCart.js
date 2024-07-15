const pricingDataset = {
    A: 50,
    B: 35,
    C: 25,
    D: 12
}

const specialPriceOffers = [{
    itemCode: "A", 
    specialItemsQuantity: 3,
    specialPrice: 140
},
{
    itemCode: "B", 
    specialItemsQuantity: 2,
    specialPrice: 60
}]

/**
 * Calculates the total value of the items within a cart, accounting for special offers.
 * Will throw an Error if there are invalid items placed in the cart.
 * 
 * @param {Array} cart A cart (array) contains items (objects). Each item object has the following properties:
 *   - code (string): The code of the item.
 *   - quantity (number): The quantity of the item.
 * @returns {Number} The total value of the items within the cart.
 * @throws {Error} If invalid items are given. 
 * 
 * * @example
 * const cart = [{ code: "A", quantity: 3 }, { code: "B", quantity: 1 }]
 * console.log(calculateCart(cart)) // Output: 175
 */
function calculateCart(cart){
    if (cart.length === 0){
        throw new Error('Cart is empty')
    }
    
    const missingItems = []
    
    cart.forEach(cartItem => {
        if(!Object.keys(pricingDataset).includes(cartItem.code)){
            missingItems.push(cartItem.code)
        }
    })

    if (missingItems.length > 0){
        let errorstring = "Item(s) "
        for(let i = 0; i < missingItems.length; i++){
            errorstring += `"${missingItems[i]}" `
        }
        errorstring += " do not exist in Pricing Dataset."
        throw new Error(errorstring)
    }

    let subtotal = 0

    cart.forEach(cartItem => {
        for (const itemCode in pricingDataset){
            if (itemCode === cartItem.code){
                subtotal += calculateSpecials(cartItem.code, cartItem.quantity, pricingDataset[itemCode])
            }
        }
    })

    return subtotal
}


/**
 * When passed the code, quantity and original price of an item,  
 * calculates the total value with consideration of special offers.
 * 
 * @param {string} itemCode - The code of the item.
 * @param {number} itemQuantity - The quantity of the item.
 * @param {number} originalPrice - The original price of the item.
 * @returns {number} - The total price for the item considering any special offers.
 */
function calculateSpecials(itemCode, itemQuantity, originalPrice) {
    let finalPrice = null

    specialPriceOffers.forEach(offer => {
        if (offer.itemCode === itemCode && itemQuantity >= offer.specialItemsQuantity){
            const valueOfSpecials = offer.specialPrice * Math.floor(itemQuantity / offer.specialItemsQuantity)
            const valueOfRemainingItems = originalPrice * (itemQuantity % offer.specialItemsQuantity)
            finalPrice = valueOfSpecials + valueOfRemainingItems
        }
    })

    if (finalPrice !== null){
        return finalPrice
    }
    
    return pricingDataset[itemCode] * itemQuantity
}

module.exports = calculateCart