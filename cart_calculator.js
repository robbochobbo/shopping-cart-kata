const pricingDataset = {
    a: 50,
    b: 35,
    c: 25,
    d: 12
}

function cart_calculator(cart){
    if (cart.length === 0){
        return "cart empty!"
    }
    let count = 0

    cart.forEach(item => {
        switch (item.code){
            case "A":
                if (item.quantity >= 3 ){
                    // divide by 3 to work out how many specials to apply and add value of specials to count
                    count += 140 * Math.floor(item.quantity / 3)

                    // remaining quantity is priced at normal value
                    count += pricingDataset.a * (item.quantity % 3)  
                    break;
                }
                else if (item.quantity < 3){
                    count += pricingDataset.a * item.quantity
                    break;
                }
            case "B":
                if (item.quantity >= 2 ){
                    count += 60 * Math.floor(item.quantity / 2)
                    count += pricingDataset.b * (item.quantity % 2)  
                    break;
                }
                else if (item.quantity < 2){
                    count += pricingDataset.b * item.quantity
                    break;
                }
            case "C":
                count += pricingDataset.c * item.quantity
                break;
            case "D":
                count += pricingDataset.d * item.quantity
                break;
        }
    });

    return count
}

module.exports = cart_calculator