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