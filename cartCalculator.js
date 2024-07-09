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

function cartCalculator(cart){
    if (cart.length === 0){
        return "cart empty!"
    }
    
    const existingItemCodes = []
    const missingItems = []

    for (const itemCode in pricingDataset){
        existingItemCodes.push(itemCode)
    }
    
    cart.forEach(cartItem => {
        if(!existingItemCodes.includes(cartItem.code)){
            missingItems.push(cartItem.code)
        }
    })

    if (missingItems.length > 0){
        let errorstring = "Item(s) "
        for(let i = 0; i < missingItems.length; i++){
            errorstring += `"${missingItems[i]}" `
        }
        errorstring += " do not exist in Pricing Dataset."
        return errorstring
    }


    let subtotal = 0

    cart.forEach(cartItem => {
        for (const itemCode in pricingDataset){
            if (itemCode === cartItem.code){
                subtotal += specialsCalculator(cartItem.code, cartItem.quantity, pricingDataset[itemCode])
            }
        }
    })

    return subtotal
}

function specialsCalculator (itemCode, itemQuantity, originalPrice) {
    for (let i = 0; i < specialPriceOffers.length; i++){
        if (specialPriceOffers[i].itemCode === itemCode && itemQuantity >= specialPriceOffers[i].specialItemsQuantity){
            const valueOfSpecials = specialPriceOffers[i].specialPrice * Math.floor(itemQuantity / specialPriceOffers[i].specialItemsQuantity)
            const valueOfRemainingItems = originalPrice * (itemQuantity % specialPriceOffers[i].specialItemsQuantity)
            return valueOfSpecials + valueOfRemainingItems
        }
    }
    return pricingDataset[itemCode] * itemQuantity
}

module.exports = cartCalculator