//case plus 
document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value
    caseInput.value = parseInt(caseNumber) + 1
})

// case minus 
document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value
    caseInput.value = parseInt(caseNumber) - 1
})