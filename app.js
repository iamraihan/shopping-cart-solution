function updateProductNumbers(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber
    //update total
    let productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price

    // calculate Total
    calculateTotal()
}
//phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumbers('phone', 1219, true)
})
//phone minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumbers('phone', 1219, false)
})

//case plus 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumbers('case', 59, true)
})

// case minus 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumbers('case', 59, false)
})

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const totalPrice = subTotal + tax

    // update on html 
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice

    console.log(subTotal);
}