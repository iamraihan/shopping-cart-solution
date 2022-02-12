function updateCaseNumbers(isIncreasing) {
    const caseInput = document.getElementById('case-number')
    let caseNumber = caseInput.value
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1
    }
    //update case total
    let caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59
    caseInput.value = caseNumber
}

//case plus 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumbers(true)
})

// case minus 
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumbers(false)
})